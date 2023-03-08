import { createContext, useContext, useState, useEffect } from "react";

export const PicturesContext = createContext();
export const usePictureContext = () => useContext(PicturesContext);

export const PicturesContextProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState([]);

  const handleLikeToggle = (item) => {
    const { id } = item;
    // por cada item que recorro, si el id del item es igual al id del item que estoy recorriendo, entonces es favorito.
    const isFavorite = favorite.some(i => i.id === id);
    if (isFavorite) {
      // si es favorito, filtro el array de favoritos y me quedo con los que no sean el id del item clickeado pasado por prop.
      setFavorite(favorite.filter((i) => i.id !== id));
    } else {
      // si no es favorito, agrego el item clickeado al array de favoritos.
      setFavorite([...favorite, item]);
    }

  }

  const getPictures = async () => {

    try {

      const response = await fetch("/fotos.json");
      const db = await response.json();
      const { photos } = db;
      setData(photos)
    } catch (error) {
      console.log(error.message)

    }
  };
  useEffect(() => {
    getPictures()
  }, [])



  return (
    <PicturesContext.Provider value={{data, setData, favorite, handleLikeToggle}} >
      {children}
    </PicturesContext.Provider>
  );
};

