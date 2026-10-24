
import styles from "./Login.module.css";
import blossom from "../../assets/blossom-flower.svg";
import googleLogo from "../../assets/icons-google-logo.svg";
import appleLogo from "../../assets/icons-apple-logo.svg";

function Login() {
  return (
    <main className={styles.container}>
      <section className={styles.left}>
        <div className={styles.formContent}>
          {/* Part 1: Title and subtitle */}
          <h1 className={styles.title}>Welcome back!</h1>
          <p className={styles.subtitle}>
            Enter your Credentials to access your account
          </p>

          {/* Part 2: Login form */}
          <form className={styles.form}>
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
              <div className={styles.passwordLabel}>
                <label htmlFor="password">Password</label>
                <a href="#" className={styles.forgotPassword}>
                  Forgot password
                </a>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <label className={styles.checkbox}>
              <input type="checkbox" name="rememberMe" />
              <span>Remember for 30 days</span>
            </label>

            <button className={styles.submitButton} type="submit">
              Login
            </button>
          </form>

          {/* Part 3: Keep unchanged for now */}
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
