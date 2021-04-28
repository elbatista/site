import { takeLatest, all, put } from 'redux-saga/effects';
import { createActions } from 'reduxsauce';

const {Types, Creators} = createActions({
    sagaTeste: ["name"],
});

const changeStateFieldSaga = (field, value) => ({
    type: "Commons/changeStateField",
    payload: {field, value}
});

function* sagaTeste(action) {
    yield put(changeStateFieldSaga("name", action.name));
}

export {Creators as Sagas};

export default function* CommonSagas() {
    yield all([
        takeLatest(Types.SAGA_TESTE, sagaTeste),
    ]);
};
