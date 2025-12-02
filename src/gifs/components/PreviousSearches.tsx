import type { FC } from 'react';

interface Props {
    searches: string[];


    onLabelClicked:(term:string)=> void;
}
export const PreviousSearches: FC<Props> = ({searches, onLabelClicked}) => {
    return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            {/* ul es el contenedor de la lista */}
              <ul className="previous-searches-List"> 
              {searches.map((term)=> (
                //li el item de la lista
                <li key={term} onClick ={() => {
                    console.log("onClick desde un item del hijo PreviousSearches")
                    onLabelClicked(term)}}>
                {term}</li>
              ))}     
            </ul>
        </div>
    )
}