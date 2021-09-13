import { useState, useEffect } from 'react';
import styles from '../../styles/Images.module.scss';

function Images() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;

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

  if (error) {
    return <p>{error.message}</p>;
  } else if (!isLoaded) {
    return <p>Loading..</p>;
  } else {
    return (
      <section className={styles.images}>
        <h1>Images</h1>
        <ul>{/* Will map through response data */}</ul>
      </section>
    );
  }
}

export default Images;
