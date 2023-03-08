import '../assets/css/galeria.css'
import Heart from "./Heart";

import { usePictureContext } from "../context/PicturesContext";

export default function Home() {
  const { data, setFavorite, favorite } = usePictureContext();
  const handleLikeToggle = (item) => {
    const { id } = item; 
    // por cada item que recorro, si el id del item es igual al id del item que estoy recorriendo, entonces es favorito.
    const isFavorite = favorite.some(i => i.id === id);
    if (isFavorite) {
      // si es favorito, filtro el array de favoritos y me quedo con los que no sean el id del item clickeado pasado por prop.
      setFavorite(favorite.filter((i) => i.id!== id));
    } else {
      // si no es favorito, agrego el item clickeado al array de favoritos.
      setFavorite([...favorite, item]);
    }
    
  }

  console.log(favorite)
  return (
    <div className="row g-3">

      {data.map((item, index) => {
        const { src: { tiny }, id } = item;
        return (
          <div className="col-12 col-md-3 position-relative" key={id}>

            <img src={tiny} className="w-100 h-100" alt='picture' />
            <div onClick={() => handleLikeToggle(item)}>
              <Heart filled={favorite.some(i => i.id === item.id)}/>
            </div>


          </div>

        )
      })}


    </div >
  )
}
