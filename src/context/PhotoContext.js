import React, { createContext, useState } from 'react';
import flickrApi from '../services/flickrApi';

export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const search = async (query) => {
    const response = await flickrApi.searchImage(query);

    if (response && response.stat === 'ok') {
      setImages(response.photos.photo);
    }

    setLoading(false);
  }; 

  return (
    <PhotoContext.Provider value={{ images, loading, search }}>
      { props.children }
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
