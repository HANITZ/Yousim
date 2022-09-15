import { React, useState } from 'react';

function SearchBar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e: any) => {
        setInputText(e.target.value)
  }
  
  return (
    <h1>SearchBar</h1>
      <input type="text" value={search} inputHandler={inputHandler} />
  )
}

export default SearchBar