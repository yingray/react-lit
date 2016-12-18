import ActionTypes from '../constants/ActionTypes'
import { apis } from '../apis'

export const showTest = text => dispatch => {
    apis.defaultTesting()
        .then(response => dispatch({
            type: ActionTypes.TEST_SHOW,
            response: response
        }))
}