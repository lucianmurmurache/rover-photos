import styles from '../../styles/About.module.scss';

About.title = 'About';
About.description =
  "Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars";
function About() {
  return (
    <section className={styles.about}>
      <p>
        Image data gathered by NASA&apos;s Curiosity, Opportunity, and Spirit
        rovers on Mars. The API used is maintained by Chris Cerami. Each rover
        has its own set of photos stored in the database, which can be queried
        separately. There are several possible queries that can be made against
        the API. Photos are organized by the sol (Martian rotation or day) on
        which they were taken, counting up from the rover&apos;s landing date. A
        photo taken on Curiosity&apos;s 1000th Martian sol exploring Mars, for
        example, will have a sol attribute of 1000. Along with querying by date,
        results can also be filtered by the camera with which it was taken and
        responses will be limited to 25 photos per call. Each camera has a
        unique function and perspective
      </p>
    </section>
  );
}

export default About;
