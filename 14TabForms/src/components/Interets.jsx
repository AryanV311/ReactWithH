import React from 'react'

export const Interets = ({data, setData}) => {
const {interets} = data


  return (
    <div>
         <div>
            <label>
                <input type="checkbox" name='coding' checked={interets.includes("coding")} /> coding
            </label>
        </div>
         <div>
            <label>
                <input type="checkbox" name='writing' checked={interets.includes("writing")} /> writing
            </label>
        </div>
         <div>
            <label>
                <input type="checkbox" name='reading' checked={interets.includes("reading")} /> Reading
            </label>
        </div>
    </div>
  )
}
