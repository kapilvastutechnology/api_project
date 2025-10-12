import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://68e33fad8e14f4523dacdbdb.mockapi.io'}),

    endpoints: (builder) =>({
        getPosts:builder.query({
            query: () => ({
                url: '/posts',
                method: 'GET',
            }),
            providersTages:['Post']
        }),

        createPost: builder.mutation({
            query: (data) => ({
                url: '/posts',  
                method: 'POST',
                body: data,
            }),
            invalidatesTags:['Post']
        }),

        removePosst:builder.mutation({
            query:(id)=>({
                url:`/posts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags:['Post']
            
        })

    })
})


export const { useGetPostsQuery, useCreatePostMutation, useRemovePosstMutation } = postApi;