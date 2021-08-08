import React, { useEffect, useContext } from 'react';
import { PhotoContext } from '../../context/PhotoContext';
import Loader from './Loader';
import Gallery from './Gallery';

export default function Container({ tag }) {
  const { images, loading, search } = useContext(PhotoContext);

  useEffect(() => {
    search(tag);
  }, [tag, search]);

  return (
    <main id="Container">
      { loading ? <Loader /> : <Gallery data={images} />}
    </main>
  );
}
