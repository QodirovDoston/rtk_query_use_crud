// // services.js

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const API_BASE_URL = 'https://reqres.in/api';

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
//   endpoints: (builder) => ({
//     // Fetch all data
//     getAllData: builder.query({
//       query: () => '/data',
//     }),
//     // Fetch single data by ID
//     getDataById: builder.query({
//       query: (id) => `/data/${id}`,
//     }),
//     // Create new data
//     createData: builder.mutation({
//       query: (newData) => ({
//         url: '/data',
//         method: 'POST',
//         body: newData,
//       }),
//     }),
//     // Update existing data
//     updateData: builder.mutation({
//       query: ({ id, updatedData }) => ({
//         url: `/data/${id}`,
//         method: 'PUT',
//         body: updatedData,
//       }),
//     }),
//     // Delete data by ID
//     deleteData: builder.mutation({
//       query: (id) => ({
//         url: `/data/${id}`,
//         method: 'DELETE',
//       }),
//     }),
//   }),
// });

// export const {
//   useGetAllDataQuery,
//   useGetDataByIdQuery,
//   useCreateDataMutation,
//   useUpdateDataMutation,
//   useDeleteDataMutation,
// } = api;
