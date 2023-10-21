import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Eatery } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

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
    }),

    purchase: builder.mutation<unknown, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantsQuery, useGetMenusQuery, usePurchaseMutation } =
  api

export default api