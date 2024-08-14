export type TRegisterUser = {
   name: string;
   email: string;
   photo: string;
   password: string;
   confirmPassword: string;
};

export type TLoginUser = {
   email: string;
   password: string;
};

export type TRequestOTP = {
   email: string;
};

export type TVerifyOTP = {
   email: string;
   otp: string;
};
