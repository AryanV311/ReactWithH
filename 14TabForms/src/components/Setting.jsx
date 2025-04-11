import React from 'react'

export const Setting = ({data, setData}) => {

    const {theme} = data;

    const handleThemeCahnge= (e) => {
        setData((prev) => ({...prev, theme:e.target.name}))
    }

  return (
    <div>
        <div>
            <label>
                <input type="checkbox" name='dark' checked={theme.includes("dark")} onChange={handleThemeCahnge} /> Dark
            </label>
        </div>
         <div>
            <label>
                <input type="checkbox" name='light' checked={theme.includes("light")} onChange={handleThemeCahnge} /> light
            </label>
        </div>
    </div>
  )
}
