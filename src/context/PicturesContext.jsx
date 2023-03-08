import { createContext, useContext, useState, useEffect } from "react";

export const PicturesContext = createContext();
export const usePictureContext = () => useContext(PicturesContext);

export const PicturesContextProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState([]);

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
    <PicturesContext.Provider value={{data, setData, favorite, setFavorite}} >
      {children}
    </PicturesContext.Provider>
  );
};

