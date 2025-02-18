"use client"

import Image from "next/image";
import Link from "next/link";
import { BiLink, BiUserCircle } from "react-icons/bi";
import { LuEye } from "react-icons/lu";
import { usePathname } from "next/navigation";


import Logo from '../../../public/assets/icon/icon.svg';
import DesktopLogo from '../../../public/assets/icon/icon-group.svg'

const NavBar = () => {
    const pathname = usePathname() as string;


    return (
        <>
            <div className="bg-white hidden sm:flex items-center justify-between px-6 py-4">
                <Link href='/'>
                    <Image src={DesktopLogo} width={146} height={32} alt="Logo" />
                </Link>
                <div className="flex gap-2">
                    <Link href='/' className={`py-3 px-6 flex items-center gap-2 rounded-md hover:bg-primary-200 hover:text-primary transition-all duration-500 ease-in-out ${pathname === '/' ? 'bg-primary-200 text-primary' : ''}`}>
                        <BiLink className="text-xl" /> <p className="font-semibold text-primary">Links</p>
                    </Link>
                    <Link href='/profile' className={`py-3 px-6 flex items-center gap-2 rounded-md hover:bg-primary-200 hover:text-primary transition-all duration-500 ease-in-out ${pathname === '/profile' ? 'bg-primary-200 text-primary' : ''}`}>
                        <BiUserCircle className="text-xl text-primary" /><p className="font-semibold text-primary">Profile Details</p>
                    </Link>
                </div>
                <Link href='/preview' className={`py-2 px-4 rounded-md border border-primary text-primary hover:bg-primary-200 hover:text-primary transition-all duration-500 ease-in-out ${pathname === '/preview' ? 'bg-primary-200' : ''}`}>
                <p className="font-semibold text-primary">Preview</p>
                </Link>
            </div>
            <div className="bg-white flex items-center justify-between px-6 py-4 sm:hidden">
                <Link href='/'>
                    <Image src={Logo} width={30} height={30} alt="Logo" />
                </Link>
                <div className="flex gap-2">
                    <Link href='/' className={`py-3 px-6 rounded-md hover:bg-primary-200 hover:text-primary transition-all duration-500 ease-in-out ${pathname === '/' ? 'bg-primary-200 text-primary' : ''}`}>
                        <BiLink className="text-xl" />
                    </Link>
                    <Link href='/profile' className={`py-3 px-6 rounded-md hover:bg-primary-200 hover:text-primary transition-all duration-500 ease-in-out ${pathname === '/profile' ? 'bg-primary-200 text-primary' : ''}`}>
                        <BiUserCircle className="text-xl text-gray-100" />
                    </Link>
                </div>
                <Link href='/preview' className={`py-2 px-4 rounded-md border border-primary text-primary hover:bg-primary-200 hover:text-primary transition-all duration-500 ease-in-out ${pathname === '/preview' ? 'bg-primary-200' : ''}`}>
                    <LuEye className="text-xl" />
                </Link>
            </div>
        </>
    );
};

export default NavBar;