export type TInputType =
   | "text"
   | "number"
   | "password"
   | "email"
   | "tel"
   | "url"
   | "file"
   | "search"
   | "date"
   | "time"
   | "datetime-local"
   | "month"
   | "week"
   | "color";

export type IMeta = {
   page: number;
   limit: number;
   total: number;
};
