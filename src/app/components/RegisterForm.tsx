"use client"

import { useFormik } from "formik"

import { basicSchema } from "../schemas"
import Image from "next/image"
import emailIcon from "../../../public/assets/icon/email.png"
import passwordIcon from "../../../public/assets/icon/password.png"

const RegisterForm = () => {
    const onSubmit = () => {
        console.log(values, errors)
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    })
    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="mt-10">
            <div>
                <label className={`text-xs ${errors.email && touched.email ? 'text-danger' : 'text-gray'}`} htmlFor="email">Email address</label>
                <div className={`border rounded py-3 flex items-center gap-3 px-4 mt-1 focus-within:shadow-input ${errors.email && touched.email ? 'border-danger' : 'border-gray-200'}`}>
                    <Image src={emailIcon} width={16} height={10} alt="email icon" className="-mb-1" />
                    <input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. alex@email.com"
                        className={`focus:outline-none input-cursor-color ${errors.email && touched.email ? 'border-red-500' : ''}`} />
                    {errors.email && touched.email && (
                        <p className="text-danger text-xs ml-auto">{errors.email}</p>
                    )}
                </div>
            </div>


            <div className="mt-6">
                <label className={`text-xs ${errors.password && touched.password ? 'text-danger' : 'text-gray'}`} htmlFor="password">Create password</label>
                <div className={`border rounded py-3 flex items-center gap-3 px-4 mt-1 focus-within:shadow-input ${errors.password && touched.password ? 'border-danger' : 'border-gray-200'}`}>
                    <Image src={passwordIcon} width={16} height={10} alt="password icon" />
                    <input
                        type="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="At least 8 characters"
                        className={`focus:outline-none input-cursor-color ${errors.password && touched.password ? 'border-red-500' : ''}`} />
                        {errors.password && touched.password && (
                        <p className="text-danger text-xs ml-auto">{errors.password}</p>
                    )}
                </div>
            </div>

            <div className="mt-6">
                <label className={`text-xs ${errors.confirmPassword && touched.confirmPassword ? 'text-danger' : 'text-gray'}`} htmlFor="confirmPassword">Confirm password</label>
                <div className={`border rounded py-3 flex items-center gap-3 px-4 mt-1 focus-within:shadow-input ${errors.confirmPassword && touched.confirmPassword ? 'border-danger' : 'border-gray-200'}`}>
                    <Image src={passwordIcon} width={16} height={10} alt="password icon" />
                    <input
                        type="password"
                        id="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="At least 8 characters"
                        className={`focus:outline-none input-cursor-color ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : ''}`} />
                        {errors.confirmPassword && touched.confirmPassword && (
                        <p className="text-danger text-xs ml-auto">{errors.confirmPassword}</p>
                    )}
                </div>
            </div>

            <p className="my-6 text-xs text-gray-100">Password must contain at least 8 characters</p>
            <button type="submit" className="w-full bg-primary rounded py-3 text-white font-semibold">Create new account</button>
        </form>
    )
}

export default RegisterForm