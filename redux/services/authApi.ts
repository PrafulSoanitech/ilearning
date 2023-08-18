import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { externalApiEndpoints as endpoints } from 'common/constants/externalApiEndpoints'
import { getBaseQuery } from 'redux/baseQuery'

interface LoginCredentials {
  email: string
  password: string
}

interface LoginResponse {
  data?: {
    token?: string
    user?: any
  }
}

export const authApi: any = createApi({
  baseQuery: getBaseQuery(),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: endpoints?.auth?.login,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useLoginUserMutation } = authApi
