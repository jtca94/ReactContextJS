import { usePictureContext } from "../context/PicturesContext";
import Heart from "../components/Heart";
export default function Favoritos() {

  const { favorite, handleLikeToggle } = usePictureContext();
  return (
    <div className="container vh-100">
      <h1 className="my-3">Fotos favoritas</h1>
      <div className="row g-3">
        {favorite.length === 0 ? <h2 className="my-5 position-relative">Para agregar fotos favoritas dale click a me gusta a tus fotos en Home! <Heart filled/></h2> : favorite.map((item) => {
          const { src: { tiny }, id } = item;
          return (
            <div className="col-12 col-md-3 position-relative" key={id}>

              <img src={tiny} className="w-100 h-100 rounded shadow" alt='picture' />
              <div onClick={() => handleLikeToggle(item)}>
                <Heart filled={favorite.some(i => i.id === item.id)} />
              </div>
            </div>
          )
        })}
        
      </div >
    </div>
  );
}
