import {useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    onQuery:(query: string)=>void;
}

export const SearchBar =({placeholder='Buscar',onQuery}:Props) => {
   const [query,setquery] = useState('');


   useEffect(() => {
  const timeoutId = setTimeout(() => {
    onQuery(query)
  }, 700);

   return () => {
     clearTimeout (timeoutId); // para limpiar y capturar la salida en pantalla (escritura)

   };
  }, [query,onQuery]);
   
   const handleSearch = ()=> {
    onQuery(query);
   }
  const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>)=> {
  if (event.key==='Enter') {
    handleSearch();
    
    }
  }
  
  return (
 <div className= "search-container">
    <input type ="text" 
    placeholder={placeholder}
    value= {query}
    onChange={(event)=>setquery(event.target.value)}
    onKeyDown={handleKeyDown}
    />
    <button onClick={handleSearch}>Buscar</button>
  </div>
  )
}