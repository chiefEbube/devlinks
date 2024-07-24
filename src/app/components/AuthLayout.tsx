import Image from "next/image"
import Logo from '../../../public/assets/images/Logo.png'

const AuthLayout = () => {
  return (
    <div className="sm:mx-auto sm:flex sm:justify-center">
        <Image
        src={Logo}
        width={182.5}
        height={40}
        alt="Logo"
        />
    </div>
  )
}

export default AuthLayout