"use client"
import Mockup from "../../components/Mockup";

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

        <button className="w-full border border-primary rounded py-[11px] font-semibold text-primary mt-10 hover:bg-primary-200 hover:border-primary-200 duration-200">+ Add new link</button>

        <div className="bg-gray-300 mt-6 rounded py-[46px] px-5">
        </div>
      </div>
    </main>
  );
}
