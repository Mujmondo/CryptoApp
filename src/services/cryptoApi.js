import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createApiHeaders = {
    'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com',
    'x-rapidapi-key': '48e9d55436msh859337d8e855d25p13024ejsnf31991c92d6e'
}

const baseUrl = 'https://genius-song-lyrics1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: createApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/songs/2396871/lyrics')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;