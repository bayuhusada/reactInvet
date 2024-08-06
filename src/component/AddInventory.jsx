import React, { useState } from 'react'
import { PlusSquare} from "@phosphor-icons/react";

const AddInventory = ({tambah}) => {

  const [name, setName] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [harga, setHarga] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name,
      jumlah: parseInt(jumlah, 10),
      harga: parseFloat(harga)
    };
    tambah(item);
    setName('');
    setJumlah('');
    setHarga('');
    
  }

  return (
    <>
    <div className='h-[500px]'>
    <div className='mt-10 uppercase text-slate-500 '>
      <h1 className='flex justify-center items-center font-bold'>Add Inventory</h1>
      <p className='flex justify-center items-center font-semibold'>Tambahkan inventory yang anda mau</p>
    </div>
    <form className='grid grid-cols-1 m-6 gap-4' onSubmit={handleSubmit}>
      <div className='flex gap-2  justify-center items-center' >
      <PlusSquare size={20} />
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} className='outline-none border bg-slate-500 w-3/5 h-10 rounded-xl pl-3' placeholder='Masukan nama barang' />
      </div>
      <div className='flex gap-2 justify-center items-center' >
      <PlusSquare size={20} />
      <input type="number" onChange={(e) => setJumlah(e.target.value)} value={jumlah} className='outline-none border bg-slate-500 w-3/5 h-10 rounded-xl pl-3' placeholder='Masukan Harga barang' />
      </div>
      <div className='flex gap-2 justify-center items-center' >
      <PlusSquare size={20} />
      <input type="number" onChange={(e) => setHarga(e.target.value)} value={harga} className='outline-none border bg-slate-500 w-3/5 h-10 rounded-xl pl-3' placeholder='Masukan Jumlah Barang' />
      </div>
      <div className='flex items-end justify-end'>
      <button type='submit' className='bg-black text-white w-20 h-10 rounded-xl'>ADD</button>
      </div>
    </form>
    </div>
    </>
  )
}

export default AddInventory