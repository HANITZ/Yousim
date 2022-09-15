import React, { useState } from 'react';
import { useRouter } from 'next/router';

function SearchBar() {
  const [inputText, setInputText] = useState("");
  const router = useRouter()
  const routerPush = () => {router.push(`/search/${inputText}`)}
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      routerPush()
    }
  }

  return (
    <div>
      <input type="text" value={inputText} onChange={(e) => {
        setInputText(e.target.value) 
      }} onKeyDown={onKeyDown}/>
      <button onClick={routerPush}>검색</button>
    </div>
)
}

export default SearchBar