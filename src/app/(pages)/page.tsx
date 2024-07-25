'use client';
import Image from "next/image";
import heroImage from '../../../public/assets/images/hero-image.svg';
import { useState } from "react";
import Mockup from "../components/Mockup";
import LinkCard from '../components/LinkCard';

export default function Home() {
  const [cards, setCards] = useState<number[]>([]);

  const addCard = () => {
    setCards(prevCards => [...prevCards, prevCards.length + 1]);
  };

  const removeCard = (id: number) => {
    setCards(prevCards => prevCards.filter(cardId => cardId !== id));
  };

  return (
    <main className="sm:m-2 min-h-screen p-3 sm:p-6 md:grid md:grid-cols-5 gap-5">
      <div className="hidden md:flex bg-white items-center justify-center col-span-2 p-10 rounded-md">
        <Mockup />
      </div>

      <div className="bg-white p-4 sm:p-10 col-span-3 rounded-md max-h-screen overflow-hidden relative">
        <div className="overflow-y-auto pr-4 max-h-[calc(100vh-8rem)]"> {/* Adjust max-height and padding for scroll area */}
          <div>
            <h1 className="font-bold text-2xl text-gray leading-9">Customize your links</h1>
            <p className="text-gray-100 font-normal text-base">Add/edit/remove links below and then share all your profiles with the world!</p>
          </div>

          <button
            onClick={addCard}
            className="w-full border border-primary rounded py-[11px] font-semibold text-primary mt-10 hover:bg-primary-200 hover:border-primary-200 duration-200"
          >
            + Add new link
          </button>

          <div className="">
            {cards.length > 0 ? (
              <div className="">
                {cards.map((id, index) => (
                  <LinkCard
                    key={id}
                    id={id}
                    position={index + 1} // Pass position starting from 1
                    onRemove={removeCard}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-gray-300 mt-6 rounded sm:py-[46px] px-5 mx-auto">
                <div>
                  <Image src={heroImage} width={240} height={160} alt="hero image" className="mx-auto" />
                </div>

                <h1 className="text-gray font-bold text-2xl md:text-3xl my-6 text-center">Let’s get you started</h1>
                <p className="text-gray-100 text-center sm:max-w-[488px] mx-auto">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
              </div>
            )}
          </div>
        </div>

        <div className="md:flex md:justify-end">
          <button className="w-full md:w-[91px] bg-button-base rounded py-[11px] font-semibold text-white mt-10">Save</button>
        </div>
      </div>
    </main>
  );
}
