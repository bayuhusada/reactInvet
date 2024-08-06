import React, { useState } from 'react'
import AddInventory from './AddInventory'

const Barang = ({setTotal}) => {
  const [data, setData] = useState([])
  const tambah = (item) => {
    setData([...data, item]);
    setTotal((prevTotal)=> prevTotal + 1);
  };

  return (
    <>
    <div className='bg-slate-300 border rounded-xl h-[500px]'>
      <div className='mb-10 '>
      <h1 className='font-bold text-2xl p-4 flex items-center justify-center'>BARANG</h1>
      <p className='font-semibold uppercase mx-3 flex items-center justify-center'>list Inventory</p>
      </div>
      <div className='relative overflow-x-auto'>
        
      <table className=' bg-white w-[80%] mx-10 md:mx-40'>
        <thead className=''>
          <tr>
            <th className='border bg-blue-200'>No</th>
            <th className='border bg-blue-200'>Barang</th>
            <th className='border bg-blue-200'>Jumlah</th>
            <th className='border bg-blue-200'>Harga</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index)=>(
          <tr key={index}>
            <td className='border'>{index + 1}</td>
            <td className='border'>{item.name}</td>
            <td className='border'>{item.jumlah}</td>
            <td className='border'>Rp.{item.harga}</td>
          </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>

    <AddInventory tambah={tambah} />
    </>
  ) 
}

export default Barang