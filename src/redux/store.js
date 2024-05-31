import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import tasksReducer from './reducers';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Root reducer
const rootReducer = combineReducers({
  tasks: tasksReducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
