"use client";

import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import { useRouter } from "next/navigation";

import emailIcon from "../../../public/assets/icon/icon-email.svg";
import passwordIcon from "../../../public/assets/icon/icon-password.svg";
import * as yup from "yup";

import { auth } from "@/app/utils/firebase-config"

const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});

const LoginForm = () => {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await signInWithEmailAndPassword(auth, values.email, values.password);
                toast.success('Login successful');
                return router.push('/')
            } catch (error) {
                console.error(error)
                if (error instanceof Error) {
                    switch (error.message) {
                        case 'Firebase: Error (auth/invalid-email).':
                            toast.error('Invalid email format. Please enter a valid email.');
                            break;
                        case ' Firebase: Error (auth/invalid-credential).':
                            toast.error('No user found with this email.');
                            break;
                        case 'Firebase: Error (auth/wrong-password).':
                            toast.error('Incorrect password. Please try again.');
                            break;
                        default:
                            toast.error('No user found with this email.');
                            break;
                    }
                }
            }
            setSubmitting(false);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} autoComplete="off" className="mt-10">
            <div>
                <label className={`text-xs ${formik.errors.email && formik.touched.email ? 'text-danger' : 'text-gray'}`} htmlFor="email">Email address</label>
                <div className={`border rounded py-3 flex items-center pl-4 mt-1 focus-within:shadow-input ${formik.errors.email && formik.touched.email ? 'border-danger' : 'border-gray-200'}`}>
                    <div className="flex gap-3 w-2/3">
                        <Image src={emailIcon} width={16} height={10} alt="email icon" className="-mb-1" />
                        <input
                            id="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="e.g. alex@email.com"
                            className={`focus:outline-none w-full input-cursor-color ${formik.errors.email && formik.touched.email ? 'border-red-500' : ''}`} />
                    </div>
                    {formik.errors.email && formik.touched.email && (
                        <p className="text-danger text-[10px] sm:text-xs">{formik.errors.email}</p>
                    )}
                </div>
            </div>


            <div className="mt-6">
                <label className={`text-xs ${formik.errors.password && formik.touched.password ? 'text-danger' : 'text-gray'}`} htmlFor="password">Create password</label>
                <div className={`border rounded py-3 flex items-center pl-4 mt-1 focus-within:shadow-input ${formik.errors.password && formik.touched.password ? 'border-danger' : 'border-gray-200'}`}>
                    <div className="flex gap-3 w-2/3">
                        <Image src={passwordIcon} width={16} height={10} alt="password icon" />
                        <input
                            type="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="At least 8 characters"
                            className={`focus:outline-none input-cursor-color ${formik.errors.password && formik.touched.password ? 'border-red-500' : ''}`} />
                    </div>
                    {formik.errors.password && formik.touched.password && (
                        <p className="text-danger text-[10px] sm:text-xs">{formik.errors.password}</p>
                    )}
                </div>
            </div>


            <button
                type="submit"
                className={`w-full rounded py-3 mt-9 text-white font-semibold hover:bg-button-base-active hover:shadow-input ${formik.isSubmitting ? 'bg-button-base-disabled' : 'bg-primary'}`}
                disabled={formik.isSubmitting}
            >
                {formik.isSubmitting ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
};

export default LoginForm;
