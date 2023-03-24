import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { locationDataReducer } from './reducers/locationDataReducer';
import { forecastWeatherReducer } from './reducers/forecastWeatherReducer';

const persistCongif = {
  key: 'root',
  storage,
};

const appReducer = combineReducers({
  locationDataReducer,
  forecastWeatherReducer
});

const sagaMiddleware = createSagaMiddleware();

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistCongif, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

export const persistor = persistStore(store);