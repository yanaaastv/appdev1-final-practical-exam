
import styles from "./Signup.module.css";
import blossom from "../../assets/blossom-flower.svg";

function Signup() {
  return (
    <main className={styles.container}>
      <section className={styles.left}>
        <div className={styles.formContent}>
          <h1 className={styles.title}>Get Started Now</h1>
        </div>
      </section>

      <section className={styles.right}>
        <img
          className={styles.blossom}
          src={blossom}
          alt="Blossom flower"
        />
      </section>
    </main>
  );
}

export default Signup;
