import styles from "./LoginPageDesktop.module.css";

const LoginPageDesktop = () => {
  return (
    <div className={styles.loginPageDesktop}>
      <img className={styles.image144Icon} alt="" src="/image-144@2x.png" />
      <section className={styles.loginElements}>
        <div className={styles.loginElementsChild} />
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.heritagehands1Wrapper}>
              <img
                className={styles.heritagehands1Icon}
                loading="lazy"
                alt=""
                src="/heritagehands-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.wrapperEmail}>
            <input
              className={styles.email}
              name="Name"
              placeholder="What shall we call you"
              type="text"
            />
            <img
              className={styles.wrapperEmailChild}
              loading="lazy"
              alt=""
              src="/group-7749.svg"
            />
          </div>
        </div>
        <div className={styles.wrapperEmail1}>
          <input
            className={styles.email1}
            name="Mail ID"
            id="abcd@gmail.com"
            placeholder="Tell us your email"
            type="email"
          />
          <img className={styles.svgIcon} alt="" src="/svg.svg" />
        </div>
        <div className={styles.wrapperPhoneNumber}>
          <input
            className={styles.phoneNumber}
            name="Number"
            id="9337623914"
            placeholder="Phone number (Optional)"
            type="tel"
          />
          <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
        </div>
        <div className={styles.wrapperPasswordParent}>
          <div className={styles.wrapperPassword}>
            <input
              className={styles.password}
              name="Password"
              placeholder="Set a password"
              type="text"
            />
            <img className={styles.codeIcon} alt="" src="/vector-2.svg" />
            <img className={styles.buttonIcon} alt="" src="/button.svg" />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.checkWrapper}>
                <input className={styles.check} type="checkbox" />
              </div>
              <div className={styles.rememberMe}>Remember me</div>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.buttonChild} />
          <b className={styles.createAnAccount}>Create an account</b>
        </button>
        <div className={styles.loginElementsInner}>
          <div className={styles.frameDiv}>
            <div className={styles.loginWithVectorsWrapper}>
              <img className={styles.loginWithVectors} />
            </div>
            <button className={styles.alreadyHaveAnContainer}>
              <p className={styles.alreadyHaveAnAccount}>
                <span className={styles.alreadyHaveAnAccount1}>
                  <span className={styles.alreadyHaveAn}>
                    Already have an account?
                  </span>
                </span>
              </p>
              <p className={styles.login}>Login</p>
            </button>
          </div>
        </div>
        <div className={styles.wrapperIndianWomenRemovebg}>
          <img
            className={styles.indianWomenRemovebgPreviewIcon}
            loading="lazy"
            alt=""
            src="/indian-womenremovebgpreview-1@2x.png"
          />
        </div>
      </section>
      <footer className={styles.loginPageDesktopInner}>
        <div className={styles.frameParent1}>
          <div className={styles.byWrapper}>
            <div className={styles.by}>by</div>
          </div>
          <img
            className={styles.enactusGrey31}
            loading="lazy"
            alt=""
            src="/enactusgrey-3-1@2x.png"
          />
        </div>
      </footer>
    </div>
  );
};

export default LoginPageDesktop;
