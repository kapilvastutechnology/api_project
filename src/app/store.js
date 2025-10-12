import { configureStore } from '@reduxjs/toolkit'; 
import { cocktailApi } from '../features/cocktailApi/CocktailApi';
import { commentApi} from '../features/comments/commentApi';
import { userApi } from '../features/users/usersApi';
import { postApi } from '../features/posts/postApi';
export const store = configureStore({
  reducer: {
    [cocktailApi.reducerPath] : cocktailApi.reducer,
    [commentApi.reducerPath] :commentApi.reducer,
    [userApi.reducerPath] : userApi.reducer,
    [postApi.reducerPath] : postApi.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([
        cocktailApi.middleware,
        commentApi.middleware,
        userApi.middleware,
        postApi.middleware
      ]),
}); 