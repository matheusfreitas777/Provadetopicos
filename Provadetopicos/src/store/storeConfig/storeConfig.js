import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    numeros: function(state, action){

        switch(action.type){
            case 'alterarNumero':
                return{
                    ...state,
                    num: action.payload
                }
            default:
                return{
                    num: 5
                }
        }
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig;
