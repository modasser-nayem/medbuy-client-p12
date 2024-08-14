import { TLoginUser, TRegisterUser } from "@/types";
import { baseApi } from "./baseApi";
import { API_METHOD } from "@/constant/apiMethod";

const authApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      registerUser: build.mutation({
         query: ({ data }: { data: TRegisterUser }) => ({
            url: "/auth/register",
            method: API_METHOD.POST,
            body: data,
         }),
      }),
      loginUser: build.mutation({
         query: ({ data }: { data: TLoginUser }) => ({
            url: "/auth/login",
            method: API_METHOD.POST,
            body: data,
         }),
      }),
   }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
