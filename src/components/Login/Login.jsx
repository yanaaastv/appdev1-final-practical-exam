
import styles from "./Login.module.css";
import blossom from "../../assets/blossom-flower.svg";
import googleLogo from "../../assets/icons-google-logo.svg";
import appleLogo from "../../assets/icons-apple-logo.svg";

function Login() {
  return (
    <main className={styles.container}>
      <section className={styles.left}>
        <div className={styles.formContent}>
          <h1 className={styles.title}>Welcome back!</h1>

          <p className={styles.subtitle}>
            Enter your Credentials to access your account
          </p>

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

          <div className={styles.divider}>
            <span></span>
            <p>Or</p>
            <span></span>
          </div>

          <div className={styles.socialButtons}>
            <button className={styles.socialButton} type="button">
              <img src={googleLogo} alt="" />
              Sign in with Google
            </button>

            <button className={styles.socialButton} type="button">
              <img src={appleLogo} alt="" />
              Sign in with Apple
            </button>
          </div>

          <p className={styles.bottomText}>
            Have an account? <a href="#">Sign In</a>
          </p>
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

export default Login;
