import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { MenuItem } from '../pages/Home'
import { Eatery } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Eatery[], void>({
      query: () => 'restaurantes'
    }),

    getMenus: builder.query<Eatery, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetMenusQuery } = api

export default api
