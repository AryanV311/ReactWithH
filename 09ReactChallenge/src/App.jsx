import { useState } from 'react'

import './App.css'
import DataList from './components/Challenge/listWithKey'
import RecipeData from './components/Challenge/NestedList'
import RecipeList from './components/Challenge/ExtractingListProps'



function App() {
 

  return (
    <>
      {/* <DataList /> */}
      {/* <RecipeData /> */}
      <RecipeList />
    </>
  )
}

export default App
