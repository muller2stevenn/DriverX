// responsavel por notificar que o usuario solicitou alguma coisa
//, corresponde a um evento
export function createUserExample(){
    return {type: 'CREATE_USER', asd: 'asd'}//chave type é obrigatoria
} //estrutura basica de uma acao


import types from './types';


export function createUser(){
    return {type: types.CREATE_USER}
}


export function updateUser(user){
    return {type: types.UPDATE_USER, user}
}
