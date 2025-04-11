import React from 'react'

export const Profile = ({data, setData}) => {

    const {name, email, age} = data

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({...prev, [name]:value}))
        console.log(data);
    }

  return (
    <div>
        <div className='box box1'>
            <label htmlFor="">Name: </label>
            <input type="text" placeholder='Enter you name...' name='name' value={name}  onChange={handleInputChange} />
        </div>
        <div className='box box1'>
            <label htmlFor="">Email: </label>
            <input type="text" placeholder='Enter you email...' name='email' value={email} onChange={handleInputChange} />
        </div>
        <div className='box box1'>
            <label htmlFor="">Age: </label>
            <input type="number" placeholder='Enter you Age...' name='age' value={age} onChange={handleInputChange} />
        </div>
    </div>
  )
}
