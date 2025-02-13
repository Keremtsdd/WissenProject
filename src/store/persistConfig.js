import storage from 'redux-persist/lib/storage';  // localStorage kullanılıyor

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorite'],
};

export default persistConfig;
