//esse arquivo seria usado em caso de mais de um modulo
//nesse exemplo temos apenas o modulo app
import { combineReducers } from 'redux';

//eu teria que importar todos os reducers, se eu tivesse mais de 1 modulo
import app from '../modules/app/reducer'

export default combineReducers({
    app: app, //aqui eu colocaria todos
});