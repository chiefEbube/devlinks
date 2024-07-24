import Image from "next/image";

import heroImage from '../../public/assets/icon/mobile-img.png'

export default function Home() {
  return (
    <main className="m-4 rounded bg-white min-h-screen p-6">
      <div>
        <h1 className="font-bold text-2xl text-gray leading-9">Customize your links</h1>
        <p className="text-gray-100 font-normal text-base">Add/edit/remove links below and then share all your profiles with the world!</p>
      </div>

      <button className="w-full border border-primary rounded py-[11px] font-semibold text-primary mt-10 hover:bg-primary hover:text-white duration-200">+ Add new link</button>

      <div className="bg-gray-300 mt-6 rounded py-[46px] px-5">
        <div>
          <Image src={heroImage} width={124} height={80} alt="hero image" className="mx-auto" />
        </div>

        <h1 className="text-gray font-bold text-2xl my-6">Let’s get you started</h1>
        <p className="text-gray-100 text-center">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
      </div>

      <button className="w-full bg-button-base-active rounded py-[11px] font-semibold text-white mt-10">Save</button>

    </main>
  );
}
