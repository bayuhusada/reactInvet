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
    

<div class="relative overflow-x-auto mx-5 rounded-xl md:mx-40 lg:mx-80">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    NO
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item, index)=>(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                </th>
                <td class="px-6 py-4">
                    {item.jumlah}
                </td>
                <td class="px-6 py-4">
                    Rp.{item.harga}
                </td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
    <AddInventory tambah={tambah} />

    </>
  ) 
}

export default Barang