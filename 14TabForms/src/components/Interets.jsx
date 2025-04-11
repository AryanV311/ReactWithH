import React from 'react'

export const Interets = ({data, setData}) => {
const {interests} = data

const handleInteretsChange = (e) => {
    setData((prev) => (
        {...prev, interests:e.target.checked ?
        [...prev.interests, e.target.name] : prev.interests.filter((i) => i !== e.target.name)
    }))
}
console.log(interests);

  return (
    <div>
         <div>
            <label>
                <input type="checkbox" name='coding' checked={interests.includes("coding")} onChange={handleInteretsChange} /> coding
            </label>
        </div>
         <div>
            <label>
                <input type="checkbox" name='writing' checked={interests.includes("writing")} onChange={handleInteretsChange} /> writing
            </label>
        </div>
         <div>
            <label>
                <input type="checkbox" name='reading' checked={interests.includes("reading")} onChange={handleInteretsChange} /> Reading
            </label>
        </div>
    </div>
  )
}
