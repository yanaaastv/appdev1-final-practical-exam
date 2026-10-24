
import styles from "./Signup.module.css";
import blossom from "../../assets/blossom-flower.svg";

function Signup() {
  return (
    <main className={styles.container}>
      <section className={styles.left}>
        <div className={styles.formContent}>
          <h1 className={styles.title}>Get Started Now</h1>

          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <label className={styles.checkbox}>
              <input type="checkbox" name="agreeToTerms" />
              <span>I agree to the terms &amp; policy</span>
            </label>

            <button className={styles.submitButton} type="submit">
              Signup
            </button>
          </form>
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
