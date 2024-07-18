import { Inter } from "next/font/google";
import { Microapp1, Microapp2, Microapp3 } from "./microapps";

import { createAndDispatchEvent } from "./helpers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleChange = () => {
    const eventNames = ["changePokemon1", "changePokemon2", "changePokemon3"];
    eventNames.forEach(createAndDispatchEvent);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="mb-4 font-extrabold text-2xl">Microfrontend Host</h1>
      <button
        onClick={handleChange}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Cambiar
      </button>
      <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 h-auto">
        <div className="bg-red-300 p-4 rounded-lg h-[350px]">
          <Microapp1 />
        </div>
        <div className="bg-green-300 p-4 rounded-lg h-[350px]">
          <Microapp2 />
        </div>
        <div className="bg-blue-300 p-4 rounded-lg h-[350px]">
          <Microapp3 />
        </div>
      </div>
    </main>
  );
}
