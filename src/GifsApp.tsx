import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/componentes/CustomHeader";
import { SearchBar } from "./shared/componentes/SearchBar";

import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type{  Gif} from "./gifs/interfaces/gif.interface";


export const GifsApp = () => {
  const [gifs,setGifs]= useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };//logica  antes de return * regla 

  const handleSearch = async (query:string = '') => {
  //2.Convertir el query a minúsculas y eliminar espacios en blanco 
    query = query.trim().toLowerCase();

//Validar que el query no esté vacío
if ( query.length === 0) return;
//3.Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )

if (previousTerms.includes(query))  return;
//4.Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.

setPreviousTerms([query, ...previousTerms].splice(0,8));


const gifs = await getGifsByQuery(query);
setGifs(gifs);
};
  return (
    <>
      {/*Header*/}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />
      {/*Search*/}
      <SearchBar placeholder="Busca lo que quieras"
      
      onQuery ={handleSearch}
      />
      
      
      {/*Busquedas previas*/}
      <PreviousSearches
        searches={previousTerms}
        /* onLabelClicked={(term: string) => handleTermClicked(term)} */
        onLabelClicked={handleTermClicked}
      />

      {/*Gifs*/}
      <GifList gifs={gifs} />

    </>
  );
};
