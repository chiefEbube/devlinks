import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Can't be empty"),
    password: yup.string().min(8, "min. 8 characters").required("Can't be empty"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), undefined], "Passwords do not match").required("Can't be empty")
})