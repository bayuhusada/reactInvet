import { MagnifyingGlass } from "@phosphor-icons/react";
import Barang from "./component/Barang";
import { useState } from "react";

export default function App() {

  const [total, setTotal] = useState(0);

  return (
    <>
      <div className="flex justify-between bg-slate-200">
        <div className="flex m-4 bg-white rounded-lg p-2 focus:outline">
        <MagnifyingGlass size={20} className="absolute mr-3" />
        <input
         type="text" name="" id="" className="outline-none shadow-none appearance-none mx-6" placeholder="ketik disini..." />
         </div>
         <div>
          <button className="items-center align-middle m-4 bg-red-400 h-10 w-10 rounded-full">B</button>
         </div>
      </div>

      <div className=" m-5 lg:w-[500px]" >
        <div className="bg-slate-200 p-10 rounded-xl">
          <h1 className="font-bold uppercase items-center">total inventory</h1>
          <p>Berikut Adalah total barang yang ada.</p>
          <h1 className="font-bold text-5xl pt-6">{total}</h1>
        </div>
      </div>

      <Barang setTotal={setTotal} />
    </>
  );
}

