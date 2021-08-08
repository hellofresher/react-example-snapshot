import Image from './Image';
import NoImages from './NoImages';
import './Gallery.css';

export default function Gallery({ data }) {
  let images;

  if (data.length > 0) {
    images = data.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

      return <Image src={src} key={id} alt={title} />;
    });
  } else {
    images = <NoImages />;
  }

  return (
    <div className="Gallery">
      <ul>
        { images }
      </ul>
    </div>
  );
}
