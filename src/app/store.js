import { configureStore } from '@reduxjs/toolkit'; 
import { cocktailApi } from '../features/cocktailApi/CocktailApi';

export const store = configureStore({
  reducer: {
    cocktailApi: cocktailApi.reducer
  },
  //caching, invalidation, polling, and other useful features of RTK Query  
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([
        cocktailApi.middleware]),
}); 