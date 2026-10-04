import * as yup from "yup";

export const schema = yup.object({
  address: yup.string().required("can’t be empty"),
  city: yup.string().required("can’t be empty"),
  post: yup.string().required("can’t be empty"),
  country: yup.string().required("can’t be empty"),
  clientName: yup.string().required("can’t be empty"),
  clientEmail: yup
    .string()
    .required("can’t be empty")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "invalid email",
    ),
  clientCity: yup.string().required("can’t be empty"),
  clientPost: yup.string().required("can’t be empty"),
  clientCountry: yup.string().required("can’t be empty"),
  date: yup.string().required("can’t be empty"),
  payment: yup.string().required("can’t be empty"),
  project: yup.string().required("can’t be empty"),
  itemName: yup.string().required("can’t be empty"),
  quantity: yup.string().required("can’t be empty"),
  price: yup.string().required("can’t be empty"),
  clientAddress: yup.string().required("can’t be empty"),
});
