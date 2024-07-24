"use client"

export default function Home() {
  return (
    <main className="m-4 rounded bg-white min-h-screen p-6">
      <div>
        <h1 className="font-bold text-2xl text-gray leading-9">Profile Details</h1>
        <p className="text-gray-100 font-normal text-base">Add your details to create a personal touch to your profile.</p>
      </div>

      <div className="bg-gray-300 mt-6 rounded py-[46px] px-5">
      </div>

      <button className="w-full bg-button-base-active rounded py-[11px] font-semibold text-white mt-10">Save</button>

    </main>
  );
}
