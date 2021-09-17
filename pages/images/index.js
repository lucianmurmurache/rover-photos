import { useState, useEffect } from 'react';
import styles from '../../styles/Images.module.scss';

import Button from '../../components/Button';
import Loading from '../../components/Loading';

Images.title = 'Rover Images';
Images.description =
  'Mars Rover images, includes camera name, date when it was taken and the rover name.';
function Images() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [sol, setSol] = useState(1);

  const nextSol = () => {
    setSol(sol + 1);
    console.log(sol);
  };

  const prevSol = () => {
    setSol(sol - 1);
    console.log(sol);
  };

  useEffect(() => {
    const apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;

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
  }, [sol]);

  const { photos } = items;
  console.log(photos);

  if (error) {
    return <p>{error.message}</p>;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <section className={styles.images}>
        <div className={styles.buttons}>
          {sol >= 2 && <Button onClick={prevSol}>Previous page</Button>}
          {sol <= 1000 && <Button onClick={nextSol}>Next page</Button>}
        </div>
        <ul>
          {photos &&
            photos.map((photo) => {
              const { rover, camera, earth_date, img_src } = photo;

              return (
                <li key={photo.id}>
                  <p>{rover.name} Rover</p>
                  <p>Launch date: {rover.launch_date}</p>
                  <p>Landing date: {rover.landing_date}</p>
                  <p>Status: {rover.status}</p>
                  <p>Camera: {camera.full_name}</p>
                  <p>{earth_date}</p>
                  <img src={img_src} alt={img_src} />
                </li>
              );
            })}
        </ul>
      </section>
    );
  }
}

export default Images;
