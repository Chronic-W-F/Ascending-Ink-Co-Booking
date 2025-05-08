import styles from '../styles/Home.module.css'; // make sure this matches exactly

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Book with Keigan Andrew Ray</h1>
      <h2>Ascending Ink Co.</h2>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdCx3szKDqlNAu2vdBOySVDS5dSwUyWsQa8_h_F8n9vCNSxXw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Book Now
      </a>
    </div>
  );
}
