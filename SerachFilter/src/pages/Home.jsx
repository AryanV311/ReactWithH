import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { materials } from '../assets/data'
import { FilterBar } from '../components/FilterBar'

export const Home = () => {
  return (
    // <div className='Product-container'>
    //     <div className='sidebar'>
    //         <div className='brand'>
    //             <div className='b-search'>
    //                 <input type="text" placeholder='search ' />
    //                 <button><IoSearch/> Search</button>
    //             </div>
    //             <div className='categories-list'>
    //                 {
    //                     materials.map((item) => (
    //                         <div className='checkbox'>
    //                             <input type='checkbox' value={item.name} />
    //                             <p>{item.name}</p>
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //         </div>  
    //     </div>
    //     <div className='product-list'>

    //     </div>
    // </div>
    <FilterBar />
  )
}
