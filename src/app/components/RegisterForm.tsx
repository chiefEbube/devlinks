"use client"

import { useFormik } from "formik"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";


import { basicSchema } from "../schemas"
import Image from "next/image"
import emailIcon from "../../../public/assets/icon/icon-email.svg"
import passwordIcon from "../../../public/assets/icon/icon-password.svg"
import { auth } from "../utils/firebase-config";


const RegisterForm = () => {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: basicSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await createUserWithEmailAndPassword(auth, values.email, values.password);
                toast.success('Signup successfully')
                setSubmitting(false)
                return router.push('/login')
            } catch (error) {
                console.error('Error signing up:', error)
                setSubmitting(false)
                if (error instanceof Error) {
                    let message;
                    switch (error.message) {
                        case 'Firebase: Error (auth/email-already-in-use).':
                            message = 'The email address is already in use. Please use a different email.';
                            break;
                        case 'Firebase: Error (auth/invalid-email).':
                            message = 'The email address is not valid. Please enter a valid email.';
                            break;
                        case 'Firebase: Error (auth/weak-password).':
                            message = 'The password is too weak. Please enter a stronger password.';
                            break;
                        default:
                            message = 'An error occurred. Please try again.';
                            break;
                    }
                    toast.error(message);
                }
            }
        }
    })


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

            <div className="mt-6">
                <label className={`text-xs ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'text-danger' : 'text-gray'}`} htmlFor="confirmPassword">Confirm password</label>
                <div className={`border rounded py-3 flex items-center pl-4 mt-1 focus-within:shadow-input ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'border-danger' : 'border-gray-200'}`}>
                    <div className="flex gap-3 w-2/3">
                        <Image src={passwordIcon} width={16} height={10} alt="password icon" />
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="At least 8 characters"
                            className={`focus:outline-none input-cursor-color ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'border-red-500' : ''}`} />
                    </div>
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <p className="text-danger text-[10px] sm:text-xs">{formik.errors.confirmPassword}</p>
                    )}
                </div>
            </div>

            <p className="my-6 text-xs text-gray-100">Password must contain at least 8 characters</p>
            <button
                type="submit"
                className={`w-full rounded py-3 text-white font-semibold hover:bg-button-base-active hover:shadow-input ${formik.isSubmitting ? 'bg-button-base-disabled' : 'bg-primary'}`}
                disabled={formik.isSubmitting}
            >
                {formik.isSubmitting ? 'Creating account...' : 'Create new account'}
            </button>
        </form>
    )
}

export default RegisterForm