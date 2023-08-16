import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const ProductApi = createApi({
    reducerPath:'ProductApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    endpoints:(builder)=>({
        getallProduct:builder.query({
            query:()=>({

                url:'product',
                method:'Get'
            }),
        }),
    }),
})

export const {useGetallProductQuery}  = ProductApi