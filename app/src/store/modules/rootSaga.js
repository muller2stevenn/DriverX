// mesma ideia, se tivessemos mais de um saga
// eles seriam combinados nesse arquivo
import {all} from 'redux-saga/effects';

//fazer o import de todos os sagas
import app from './app/sagas';

//generator func, similar ao async await
export default function* rootSaga(){
    return yield all([app]);
}