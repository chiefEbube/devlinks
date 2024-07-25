"use client"
import Image from "next/image";

import heroImage from '../../../public/assets/images/hero-image.svg'
import { useState } from "react";
import LinkCard from "../components/LinkCard";
import Mockup from "../components/Mockup";

export default function Home() {
  const [isLinkAdded, setIsLinkAdded] = useState(false)
  return (
    <main className="m-2 min-h-screen p-6 md:grid md:grid-cols-5 gap-5">
      <div className="hidden md:flex bg-white items-center justify-center col-span-2 p-10 rounded-md">
        <Mockup/>
      </div>

      <div className="bg-white p-10 col-span-3 rounded-md">
        <div>
          <h1 className="font-bold text-2xl text-gray leading-9">Customize your links</h1>
          <p className="text-gray-100 font-normal text-base">Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>

        <button className="w-full border border-primary rounded py-[11px] font-semibold text-primary mt-10 hover:bg-primary-200 hover:border-primary-200 duration-200">+ Add new link</button>

        <div className="bg-gray-300 mt-6 rounded py-[46px] px-5">
          {isLinkAdded ?
            <>
              <LinkCard />
            </>

            :

            <div className="max-w-[488px] mx-auto">
              <div>
                <Image src={heroImage} width={240} height={160  } alt="hero image" className="mx-auto" />
              </div>

              <h1 className="text-gray font-bold text-2xl md:text-3xl my-6 text-center">Let’s get you started</h1>
              <p className="text-gray-100 text-center">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
            </div>
          }
        </div>

        <button className="w-full bg-button-base-active rounded py-[11px] font-semibold text-white mt-10">Save</button>
      </div>
    </main>
  );
}
