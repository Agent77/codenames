import React from 'react';
import GameActions from '../actions/gameActions'
import history from '../history'
import GameStore from '../stores/GameStore'
import Participants from './Participants';
import Board from '../components/Board'
import Actions from '../constants'

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.addListeners();
        this.state = { 
            user: this.props.location.state.user, 
            game_id: this.props.location.state.game_id, 
            users: this.props.location.state.users };
    }

    addListeners() {
        GameStore.on(Actions.USER_ADDED, () => {
            var newData = GameStore.getNewData();
            console.log(newData.users)
            this.setState({ ...this.state, users: newData.users });
        });
       

    }

    render() {
        return (
            <div>
            <div>
                <Participants users={this.state.users}/>
               
         </div>
         <div >
                <Board is_spymaster={this.state.user.is_spymaster}/>
             
         </div>
         </div>
        );
    }
}

export default Game;