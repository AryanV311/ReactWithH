import React from 'react'
import { FilterBar } from '../components/FilterBar'

export const Home = ({selected, globalSearch,setSelected }) => {
  return (
    <FilterBar selected={selected} globalSearch={globalSearch} setSelected={setSelected} />
  )
}
