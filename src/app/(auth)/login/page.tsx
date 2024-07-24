import LoginForm from "@/app/components/LoginForm"
import Link from "next/link"

const page = () => {
  return (
    <div className="pt-16 bg-white sm:w-[476px] h-screen sm:max-h-[482px] mx-auto sm:p-10 sm:mt-14 rounded">
      <div>
        <h1 className="font-semibold text-2xl text-gray leading-9">Login</h1>
        <p className="text-gray-100 font-normal text-base">Add your details below to get back into the app</p>
      </div>

      <LoginForm/>

      <div className="text-center mt-6">
        <p className="text-gray-100">Don’t have an account?</p>
        <Link href='/register' className="text-primary">Create account</Link>
      </div>
    </div>
  )
}

export default page