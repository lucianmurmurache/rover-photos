import { useState, useEffect } from 'react';
import styles from '../../styles/Images.module.scss';

Images.title = 'Rover Images';
Images.description =
  'Mars Rover images, includes camera name, date when it was taken and the rover name.';
function Images() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;

    fetch(apiURL)
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        console.log(result);
        setItems(result);
      })
      .catch((error) => {
        setError(error);
        console.log(error.message);
      });
    console.log(items);
  }, []);

  const { photos } = items;
  console.log(photos);

  if (error) {
    return <p>{error.message}</p>;
  } else if (!isLoaded) {
    return <p>Loading..</p>;
  } else {
    return (
      <section className={styles.images}>
        <ul>
          {photos &&
            photos.map((photo) => {
              return (
                <li key={photo.id}>
                  <p>{photo.rover.name} Rover</p>
                  <p>Launch date: {photo.rover.launch_date}</p>
                  <p>Landing date: {photo.rover.landing_date}</p>
                  <p>Status: {photo.rover.status}</p>
                  <p>Camera: {photo.camera.full_name}</p>
                  <p>{photo.earth_date}</p>
                  <img src={photo.img_src} alt={photo.img_src} />
                </li>
              );
            })}
        </ul>
      </section>
    );
  }
}

export default Images;
