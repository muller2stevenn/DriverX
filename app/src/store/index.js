//agora vamos juntar todas as configurações aqui
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import Reactotron from '../config/reactotron';
import rootSaga from './modules/rootSaga';

//esse cara é um interceptador e tbm vai conseguir ouvir as actions
const sagaMiddleware = createSagaMiddleware();

//criando a store que pode conter mais de um estado
const store = createStore(
    rootReducer, 
    compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
);

sagaMiddleware.run(rootSaga);

export default store;