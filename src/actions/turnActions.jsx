import Dispatcher from '../Dispatcher';
import ActionTypes from '../constants';
 
class TurnActions {
 
    updateBoard(card) {
        // Note: This is usually a good place to do API calls.
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_BOARD,
            payload: card 
        });
    }
 
}
 
export default new TurnActions();