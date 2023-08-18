import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { externalApiEndpoints } from 'common/constants/externalApiEndpoints'

export const getBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: externalApiEndpoints.baseUrl,
    // prepareHeaders: (headers) => {
    //   const token = getToken() // Get token from cookies

    //   // if (token) {
    //   //   headers.Authorization = `Bearer ${token}`
    //   // }
    //   return headers
    // },
  })
}

// interface IHeader {
//     "X-RapidAPI-Key": string;
//     "X-RapidAPI-Host": string;
//   }
//   const Header: IHeader = {
//     "X-RapidAPI-Key": "6b365afe7cmsh5548dfde4720349p10e88bjsn3c9175ff3429",
//     "X-RapidAPI-Host": "car-data.p.rapidapi.com",
//   };

// prepareHeaders: (headers) => {
//     headers.set("X-RapidAPI-Key", Header["X-RapidAPI-Key"]);
//     headers.set("X-RapidAPI-Host", Header["X-RapidAPI-Host"]);

//     return headers;
//   },
