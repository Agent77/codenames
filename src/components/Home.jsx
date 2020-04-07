import React from 'react';
import GameActions from '../actions/gameActions'
import history from '../history'
import GameStore from '../stores/GameStore'
import Actions from '../constants'
class Home extends React.Component {

    constructor(props) {
      super(props);
      this.addListeners();
     
    }
    addListeners() {
         
         GameStore.on(Actions.NEW_GAME, () => {
             var newData = GameStore.getNewData();
             history.push('/Login', {new: true, game_id: newData.game_id})
         });
        }
  
    render() {
      return (
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <button onClick={() => { GameActions.newGame()}}>Create New Game </button>
          <button onClick={() => history.push('/Login', {new: false})}>Join A Game </button>
        </div>
        
      );
    }
  }

  export default Home;