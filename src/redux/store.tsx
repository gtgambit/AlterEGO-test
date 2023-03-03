//import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import authReducer, { AuthState } from "./Auth/authSlice";
//import articlesReducer, { ArticlesState } from "./ArticlesSlice/articlesSlice";
//import {
//  persistReducer,
//  persistStore,
//  FLUSH,
//  REHYDRATE,
//  PAUSE,
//  PERSIST,
//  PURGE,
//  REGISTER,
//} from "redux-persist";
//import storage from "redux-persist/lib/storage";
//import { useDispatch } from "react-redux";

//export interface RootState {
//  auth: AuthState;
//  articles: ArticlesState;
//}

//const rootReducer = combineReducers({
//  auth: authReducer,
//  articles: articlesReducer,
//});

//const rootPersistConfig = {
//  key: "root",
//  storage: storage,
//};

//const persistedReducer = persistReducer<RootState>(
//  rootPersistConfig,
//  rootReducer
//);

//export const store = configureStore({
//  reducer: persistedReducer,
//  middleware: (getDefaultMiddleware) =>
//    getDefaultMiddleware({
//      serializableCheck: {
//        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//      },
//    }),
//});

//export type AppDispatch = typeof store.dispatch;

//export const useAppDispatch = () => useDispatch<AppDispatch>();

//export const persistor = persistStore(store);

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer, { AuthState } from "./Auth/authSlice";
import articlesReducer, { ArticlesState } from "./ArticlesSlice/articlesSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useDispatch } from "react-redux";

export interface RootState {
  auth: AuthState;
  articles: ArticlesState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  articles: articlesReducer,
});

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const persistedReducer = persistReducer<RootState>(
  {
    key: "root",
    storage: storage,
    whitelist: ["auth"],
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
