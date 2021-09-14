import styles from '../../styles/About.module.scss';

About.title = 'About';
function About() {
  return (
    <section className={styles.about}>
      <p>
        This API is designed to collect image data gathered by NASA&apos;s
        Curiosity, Opportunity, and Spirit rovers on Mars and make it more
        easily available to other developers, educators, and citizen scientists.
        This API is maintained by Chris Cerami. Each rover has its own set of
        photos stored in the database, which can be queried separately. There
        are several possible queries that can be made against the API. Photos
        are organized by the sol (Martian rotation or day) on which they were
        taken, counting up from the rover&apos;s landing date. A photo taken on
        Curiosity&apos;s 1000th Martian sol exploring Mars, for example, will
        have a sol attribute of 1000. If instead you prefer to search by the
        Earth date on which a photo was taken, you can do that too. Along with
        querying by date, results can also be filtered by the camera with which
        it was taken and responses will be limited to 25 photos per call.
        Queries that should return more than 25 photos will be split onto
        several pages, which can be accessed by adding a &apos;page&apos; param
        to the query. Each camera has a unique function and perspective
      </p>
    </section>
  );
}

export default About;
