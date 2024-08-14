"use client";

import FormWrapper from "@/components/Forms/FormWrapper/FormWrapper";
import InputItem from "@/components/Forms/InputItem/InputItem";
import Button from "@/components/UI/Button";
import { useRegisterUserMutation } from "@/redux/api/authApi";
import { isReduxRTQError } from "@/redux/api/baseApi";
import { useAppDispatch } from "@/redux/hook";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
   const router = useRouter();
   const [errors, setErrors] = useState([]);
   const dispatch = useAppDispatch();

   const [registerUser, { data, error, isSuccess }] = useRegisterUserMutation();

   const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
      try {
         const modifyData = {
            name: formData.name,
            email: formData.email,
            photo: formData.photo,
            password: formData.password,
            confirmPassword: formData.password,
         };
         registerUser({ data: modifyData });
      } catch (error: any) {
         toast.error("Something went wrong! try again.");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
         router.push("/login");
      }
      if (isReduxRTQError(error)) {
         if (error?.data?.error) {
            setErrors(error.data.error);
         } else {
            toast.error(error.data.message);
         }
      }
   }, [data, error, router, dispatch]);
   console.log(errors);
   return (
      <div className="flex items-center justify-center">
         <div className="w-[600px] p-10 mt-10">
            <h2 className="text-3xl text-center font-semibold mb-5">Sign Up</h2>
            <div>
               <FormWrapper
                  onSubmit={onSubmit}
                  success={isSuccess}
                  errors={errors}
               >
                  <InputItem
                     type="text"
                     label="Name"
                     name="name"
                     placeholder="Enter your name"
                     required={true}
                  />
                  <InputItem
                     type="email"
                     label="Email"
                     name="email"
                     placeholder="Enter your email"
                     required={true}
                  />
                  <InputItem
                     type="url"
                     label="Photo URL"
                     name="photo"
                     placeholder="Enter your photo url"
                     required={true}
                  />
                  <InputItem
                     type="password"
                     label="Password"
                     name="password"
                     placeholder="Enter your password"
                     required={true}
                  />
                  <InputItem
                     type="password"
                     label="Confirm Password"
                     name="confirmPassword"
                     placeholder="Enter your Confirm password"
                     required={true}
                  />
                  <Button
                     type="submit"
                     className="w-full mt-5"
                  >
                     Sign Up
                  </Button>
                  <p className="text-center text-gray-500 mt-4">
                     Already have an account?{" "}
                     <Link
                        href="/login"
                        className="font-semibold text-gray-800 hover:text-primary"
                     >
                        Sign in
                     </Link>
                  </p>
               </FormWrapper>
            </div>
         </div>
      </div>
   );
};

export default RegisterPage;
