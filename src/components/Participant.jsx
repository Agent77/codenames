import React from 'react';
import gameActions from '../actions/gameActions';

class Participant extends React.Component {

    render() {
        return (
            <div>
                {this.props.user.name}
                {this.props.user.color}
                {this.props.user.is_spymaster}
                <button text='Make Spymaster' onClick={()=> {
                    gameActions.makeSpymaster()
                }}></button>
                
            </div>
        );
    }
}

export default Participant;