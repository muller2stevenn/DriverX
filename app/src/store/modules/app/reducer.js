// responsavel por ter o nosso estado, os dados do estado
//e com ele vamos poder ouvir as ações
import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
    user:{
        fbId: null,
        nome: null,
        email: null,
        tipo: 'M',
        accessToken: null,

    },
}

function app(state = INITIAL_STATE, action){
    //aqui vou escutar as ações
    switch(action.type){
        case types.UPDATE_USER:{
            return produce(state, (draft)=>{
                    //junção do estado atual com o estado vindo da ação
                    //... -> combina objetos
                    draft.user = {...state.user, ...action.user}; 
            })
        }
        default:
            return state;
    }
}

export default app;