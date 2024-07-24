import Image from "next/image"
import emailIcon from "../../../public/assets/icon/email.png"
import passwordIcon from "../../../public/assets/icon/password.png"

const RegisterForm = () => {
    return (
        <form className="mt-10">
            <div>
                <label className="text-xs text-gray" htmlFor="email">Email address</label>
                <div className="border border-gray-200 rounded py-3 flex items-center gap-3 px-4 mt-1 focus-within:shadow-input">
                    <Image src={emailIcon} width={16} height={10} alt="email icon"/>
                    <input type="email" id="email" placeholder="e.g. alex@email.com" className="focus:outline-none input-cursor-color"/>
                </div>
            </div>


            <div className="mt-6">
                <label className="text-xs text-gray mb-2" htmlFor="password">Create password</label>
                <div className="border border-gray-200 rounded py-3 flex items-center gap-3 px-4 mt-1 focus-within:shadow-input">
                <Image src={passwordIcon} width={16} height={10} alt="password icon"/>
                    <input type="password" id="password" placeholder="At least 8 characters" className="focus:outline-none input-cursor-color"/>
                </div>
            </div>

            <div className="mt-6">
                <label className="text-xs text-gray mb-2" htmlFor="password">Confirm password</label>
                <div className="border border-gray-200 rounded py-3 flex items-center gap-3 px-4 mt-1 focus-within:shadow-input">
                <Image src={passwordIcon} width={16} height={10} alt="password icon"/>
                    <input type="password" id="password" placeholder="At least 8 characters" className="focus:outline-none input-cursor-color"/>
                </div>
            </div>

            <p className="my-6 text-xs text-gray-100">Password must contain at least 8 characters</p>
            <button className="w-full bg-primary rounded py-3 text-white font-semibold">Create new account</button>
        </form>
    )
}

export default RegisterForm