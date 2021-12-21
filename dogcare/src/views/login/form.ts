import { sha512 } from "js-sha512";
import * as yup from "yup";
import { User } from "../../models/user/types";

export interface formValues {
  username: string;
  email: string;
  password: string;
  register?: boolean;
}

export const initialValues: formValues = {
  username: "",
  email: "",
  password: "",
  register: false,
};

export const validationSchema: yup.SchemaOf<formValues> = yup.object().shape({
  username: yup.string().required("Username is a required field"),
  email: yup.string().email().required("Email is a required field"),
  password: yup
    .string()
    .min(4, "At least 5 characters")
    .max(18, "Max 18 characters")
    .required("Pasword is a required field"),
  register: yup.boolean(),
});

export const onSubmit = (
  values: formValues,
  login: (user: Partial<User>) => void,
  signin: (user: Partial<User>) => void
) => {
  const possibleUser: Partial<User> = {
    username: values.username,
    email: values.email,
    password: sha512(values.password),
  };

  if (!values.register) {
    login(possibleUser);
  } else {
    signin(possibleUser);
  }
};
