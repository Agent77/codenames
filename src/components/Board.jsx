import React from 'react';
import GameActions from '../actions/gameActions'
import history from '../history'
import GameStore from '../stores/GameStore'
import Participant from './Participant';
import WordCard from './WordCard';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.addListeners();
        this.state = {started: false}
        //this.state = { user: this.props.location.state.user, username: this.props.location.state.username, game_id: this.props.location.state.game_id, users: this.props.location.state.users };
        //console.log(this.props.location.state.users)

    }
    addListeners() {
        GameStore.on("userAdded", () => {
            var newData = GameStore.getNewData();
            console.log(newData.users)
            this.setState({ ...this.state, users: newData.users });
        });

        GameStore.on('start', ()=> {
            var newData = GameStore.getNewData();
            this.setState({ ...this.state, board: newData.board, started: true });
        });

        GameStore.on('cardsChange', () => {
            var newData = GameStore.getNewData();
            this.setState({ ...this.state, board: newData.board });
        });

    }

    render() {
        const board = this.state.started ?  <div>
        <WordCard word='The Word'/>
    </div> : <div>
        <button onClick={()=> {this.setState({...this.state, started: true}); GameActions.start()}}>Start Game</button>
    </div>
        return (
            <div>
                {board}
            </div>

        );
    }
}

export default Board;