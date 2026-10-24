import styles from "./Signup.module.css";

import blossom from "../../assets/blossom-flower.svg";

function Signup() {
  return (
    <main className={styles.container}>
      <section className={styles.left}></section>

      <section className={styles.right}>
        <img src={blossom} alt="Blossom flower" />
      </section>
    </main>
  );
}

export default Signup;