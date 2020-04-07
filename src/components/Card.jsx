import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div onClick={()=> { console.log('Card clicked')}}>
                {this.props.word}
            </div>
        );
    }
}

export default Card;