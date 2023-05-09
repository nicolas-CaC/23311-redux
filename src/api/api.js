import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const reducerPath = 'apiPath'

const baseQuery = fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' })

const endpoints = builder => ({
    getPosts: builder.query({ query: () => 'posts' }),
    getPost: builder.query({ query: (id) => `posts/${id}` }),
    getComments: builder.query({ query: () => 'comments' }),
    getComment: builder.query({ query: (id) => `comments/${id}` }),
})


export const apiQuery = createApi({ reducerPath, baseQuery, endpoints })

export const {
    useGetCommentsQuery,
    useGetCommentQuery,
    useGetPostsQuery,
    useGetPostQuery
} = apiQuery