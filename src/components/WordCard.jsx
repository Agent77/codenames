import React from 'react';
import Card from './Card'
class WordCard extends Card {

    render() {
        return (
            <div onClick={()=> { console.log('Card clicked')}}>
                {this.props.word}
            </div>
        );
    }
}

export default WordCard;