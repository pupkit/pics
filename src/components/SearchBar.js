import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('')
  const handleFormSubmit = (event) => {
    event.preventDefault()
    // console.log('handle submit')
    onSubmit(term)
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  //   const handleClick = () => {
  //     onSubmit()
  //   }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder='Type keyword'
          onChange={handleChange}
          value={term}
        />
      </form>
      {/* <button onClick={handleClick}>Search</button> */}
    </div>
  )
}

export default SearchBar
