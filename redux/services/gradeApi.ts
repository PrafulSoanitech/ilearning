import { createApi } from '@reduxjs/toolkit/query/react'
import { getBaseQuery } from 'redux/baseQuery'
import { externalApiEndpoints as endpoints } from 'common/constants/externalApiEndpoints'

export const gradeApi = createApi({
  baseQuery: getBaseQuery(),
  endpoints: (builder) => ({
    fetchGrades: builder.query({
      query: () => endpoints.grades.base,
    }),
    fetchGradesById: builder.query({
      query: (id) => endpoints.grades.byId.replace('{gradeId}', id),
    }),
  }),
})

export const { useFetchGradesQuery, useFetchGradesByIdQuery } = gradeApi
