import { EventEmitter } from 'events';
import Dispatcher from '../Dispatcher.jsx';
import ActionTypes from '../constants';
import { firestore } from '../firebase.js'; // add

 
class GameStore extends EventEmitter {
 
    constructor() {
        super();
        this.game_state = {game_id: '', users: []};
        Dispatcher.register(this._registerToActions.bind(this));
        
    }
 
    _registerToActions(action) {
        switch(action.actionType) {
            case ActionTypes.NEW_GAME:
                this._createNewGame(action.payload);
            break;
            case ActionTypes.JOIN_GAME:
                this._joinGame(action.payload);
            break;
            case ActionTypes.START:
                this._start(action.payload);
            break;
            default:
                break;
        }
    }
 
    getNewData() {
        return this.game_state;
    }

    _createNewGame() {
        const store = this;
        firestore.collection('games').add({started: 'false', participants: []}).then(function(newGame) {
            store.game_state.game_id =  newGame.id
            store.addGameListener();
            store.emit(ActionTypes.NEW_GAME);

        })
       
        
    }

    _joinGame(item) {
        const store = this;
        firestore.collection("games").doc(item.game_id).get().then(function(doc) {
                store.game_state.users = doc.data().participants;
                store.game_state.users.push(item.user);
                store.game_state.game_id = item.game_id;
                console.log('Joining game users: ' + store.game_state.users[0])
                console.log('Joining game users: ' + store.game_state.users[1])
                firestore.collection('games')
                .doc(item.game_id)
                .update(
                { participants: store.game_state.users }
                ).then(function(game) {
                    store.emit(ActionTypes.JOIN_GAME);
                });
            });

       
    }

    _start() {
        firestore.collection("games").doc(this.game_state.game_id).update({started: true});
    }

    /*
    Any change that occurs within this game ID's 
    document will trigger the onSnapshot()
     */
    addGameListener() {
        const store = this;
        firestore.collection("games").doc(store.game_state.game_id)
        .onSnapshot(function(doc) {
        if(store.game_state.users !== undefined && store.game_state.users.length < doc.data().participants.length) {
            store.game_state.users = doc.data().participants
            store.emit(ActionTypes.USER_ADDED)
        }
        if(!store.game_state.started && doc.data().started === true)
            store.emit(ActionTypes.START);
        });
    }
}
 
export default new GameStore();