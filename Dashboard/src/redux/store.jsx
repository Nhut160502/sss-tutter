import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loadingSlice from 'src/providers/loadingSlice'
import modalSlice from 'src/providers/modalSlice'
import sidebarSlice from 'src/providers/sidebarSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const rootReducer = combineReducers({
  loading: loadingSlice,
  sidebar: sidebarSlice,
  modal: modalSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
