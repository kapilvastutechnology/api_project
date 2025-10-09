import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com'}),

    endpoints: (builder) => ({
        getComment : builder. query({
            query : (id) => ({
                url: `/comments/${id}`,
                method: 'GET',
            })
        })
    })
});

export const { useGetCommentQuery } = commentApi;