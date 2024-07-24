import RegisterForm from "@/app/components/RegisterForm"
import Link from "next/link"

const page = () => {
  return (
    <div className="pt-16 bg-white min-w-[375px] sm:w-[476px] mx-auto sm:p-10 sm:mt-14 rounded">
      <div>
        <h1 className="font-semibold text-2xl text-gray leading-9">Create account</h1>
        <p className="text-gray-100 font-normal text-base">Let’s get you started sharing your links!</p>
      </div>

      <RegisterForm/>

      <div className="text-center mt-6">
        <p className="text-gray-100">Already have an account?</p>
        <Link href='/login' className="text-primary">Login</Link>
      </div>
    </div>
  )
}

export default page