import React from 'react';
import GameActions from '../actions/gameActions'
import history from '../history'
import GameStore from '../stores/GameStore'
import Actions from '../constants'

class Login extends React.Component {

    constructor(props) {
        super(props);
//                game_id: this.props.location.state.new ? this.props.location.state.game_id : '', 

            this.state = { 
                username: '', 
                user_id: 0
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleIDChange = this.handleIDChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.addListeners();
        
        }
   
    addListeners() {
         
        GameStore.on(Actions.JOIN_GAME, () => {
            var newData = GameStore.getNewData();
            history.push('/Game', {user: this.state.current_user, game_id: newData.game_id, users: newData.users})
        });
       }
 
    handleChange(event) {
        this.setState({ username: event.target.value });
    }

    handleIDChange(event) {
        this.setState({ game_id: event.target.value });
    }

    handleSubmit(event) {
        console.log('Joining game...')
        event.preventDefault();
        this.state.current_user = { name: this.state.username, is_spymaster: false, color: 0}
        GameActions.joinGame({ user: this.state.current_user, game_id: this.state.game_id });
    }

    render() {
        const join = this.props.location.state.new ? <div>
            Game ID: {this.props.location.state.game_id}
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.handleChange} />
                </label>

                <input type="submit" value="Join" />
            </form>
        </div> : <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Game ID:
          <input
            type="text"
            placeholder='Paste Game ID'
            value={this.props.location.state.game_id}
            onChange={this.handleIDChange} />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="Join" />

      </form>
            </div>;

        return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            {join}
            </div>
      );
    }
}

export default Login;