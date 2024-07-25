"use client"
import Image from "next/image";
import Mockup from "../../components/Mockup";

import File from "../../../../public/assets/icon/file.svg"

export default function Home() {
  return (
    <main className="m-2 min-h-screen p-6 md:grid md:grid-cols-5 gap-5">
      <div className="hidden md:flex bg-white items-center justify-center col-span-2 p-10 rounded-md">
        <Mockup />
      </div>

      <div className="bg-white p-10 col-span-3 rounded-md">
        <div>
          <h1 className="font-bold text-2xl text-gray leading-9">Profile Details</h1>
          <p className="text-gray-100 font-normal text-base">Add your details to create a personal touch to your profile.</p>
        </div>

        <div className="bg-gray-300 mt-6 rounded py-[46px] px-5 text-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="md:w-2/6">Profile picture</p>
            <div className="bg-primary-200 w-[193px] h-[193px] rounded-md md:mr-10 grid place-content-center my-5 md:my-0">
                <Image src={File} width={32} height={27} alt="file icon" className="mx-auto"/>
                <p className="mx-auto font-semibold text-primary">+ Uploade Image</p>
              <input type="file" hidden/>
            </div>
            <p className="md:w-2/6 text-xs">Image must be below 1024x1024px. Use PNG or JPG format.</p>
          </div>
        </div>

        <div className="bg-gray-300 mt-6 rounded py-[46px] px-5">

        </div>


        <div className="md:flex md:justify-end">
          <button className="w-full md:w-[91px] bg-button-base rounded py-[11px] font-semibold text-white mt-10">Save</button>
        </div>
      </div>
    </main>
  );
}
