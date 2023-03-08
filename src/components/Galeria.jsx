import '../assets/css/galeria.css'
import Heart from "./Heart";

import { usePictureContext } from "../context/PicturesContext";

export default function Home() {
  const { data, handleLikeToggle, favorite } = usePictureContext();


  console.log(favorite)
  return (
    <div className="row g-3">

      {data.map((item) => {
        const { src: { tiny }, id } = item;
        return (
          <div className="col-12 col-md-3 position-relative" key={id}>
            <img src={tiny} className="rounded shadow w-100 h-100" alt='picture' />
            <div onClick={() => handleLikeToggle(item)}>
              <Heart filled={favorite.some(i => i.id === item.id)} />
            </div>
          </div>
        )
      }
    )}
    </div >
  )
}
