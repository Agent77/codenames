import React from 'react';
import Participant from './Participant';

class Participants extends React.Component {

    render() {
        return (
            <div>
            {this.props.users.map((item,index) => { 
                return <Participant user={item}/>
            })}
            </div>
            
        );
    }
}

export default Participants;