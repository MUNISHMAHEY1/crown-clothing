import { all , call } from 'redux-saga/effects';

import { ShopSagas } from './shop/ShopSagas';
import { userSagas } from './user/UserSagas';
import { cartSagas } from './cart/CartSagas';

export default function* RootSaga() {
    yield all([
        call(ShopSagas),
        call(userSagas),
        call(cartSagas)
    ])
};