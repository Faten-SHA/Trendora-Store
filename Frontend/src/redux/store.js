import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./CartRedux";
import userReducer from "./userRedux";

import { FLUSH,PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE , persistReducer, persistStore} from "redux-persist";

import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    version:1,
    storage,
}

const rootReducer= combineReducers({user: userReducer, cart: cartReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware) =>getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        },
    })
});

export let persister = persistStore(store);