import styles from "./page.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.page_title}>
        <h1>Contact Us</h1>
        <h3>
          You can write to us here and we will respond to you within no more
          than 24 hours
        </h3>
      </div>
      <div className={styles.inputs}>
        <form action="">
          <div className={styles.user_name}>
            <label htmlFor="name">Name *</label>
            <input type="text" />
          </div>
          <div className={styles.user_email}>
            <label htmlFor="email">Email address *</label>
            <input type="text" />
          </div>
          <div className={styles.user_mesage}>
            <label htmlFor="mesage">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <button className={styles.submit}>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
