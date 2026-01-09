import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";



export const useGifs = () => {
    //Aqui va toda la logica
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef <Record<string,Gif[]>>({}); // Variables internas, no se usan en el front (html)
     
       
     
      const handleTermClicked = async (term: string) => { 
        if (gifsCache.current[term]) {
         setGifs(gifsCache.current [term]);
          return;
        }
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
      };
       // if(lastSearch.current === term){
       //     console.log("bloqueado por hacer la misma peticion")
        //    return;
        //}
       // else {
       // const gifs = await getGifsByQuery(term);
       // lastSearch.current = term
       // setGifs(gifs);
        //}
      //logica  antes de return * regla 
    
      const handleSearch = async (query: string = '') => {
        //2.Convertir el query a minúsculas y eliminar espacios en blanco 
        query = query.trim().toLowerCase();
    
        //Validar que el query no esté vacío
        if (query.length === 0) return;
        //3.Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
    
        if (previousTerms.includes(query)) return;
        //4.Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
    
        setPreviousTerms([query, ...previousTerms].splice(0, 8));
    
        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        gifsCache.current[query] = gifs;
        console.log(gifsCache);
      };
  return (
    {
        //Aqui va lo que se va a exponer - exportar
        //Properties

        gifs,
        previousTerms,
        //Methods
        handleSearch,
        handleTermClicked,
      
    
    }
  )
}



