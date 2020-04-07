import Dispatcher from '../Dispatcher';
import ActionTypes from '../constants';
 
class GameActions {
 
    newGame(gameID) {
        // Note: This is usually a good place to do API calls.
        Dispatcher.dispatch({
            actionType: ActionTypes.NEW_GAME,
            payload: gameID 
        });
    }

    joinGame(item) {
        Dispatcher.dispatch({
            actionType: ActionTypes.JOIN_GAME,
            payload: item 
        });
    }

    start() {
        Dispatcher.dispatch({
            actionType: ActionTypes.START
        });
    }
 
}
 
export default new GameActions();