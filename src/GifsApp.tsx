import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/componentes/CustomHeader";
import { SearchBar } from "./shared/componentes/SearchBar";



export const GifsApp = () => {
  const {gifs, handleTermClicked, handleSearch, previousTerms} = useGifs()
  return (
    <>
      {/*Header*/}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />
      {/*Search*/}
      <SearchBar placeholder="Busca lo que quieras"

        onQuery={handleSearch}
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
