'use client'

import Image from "next/image";
import { useEffect } from "react";
import styles from "./app.module.css";
import bstyles from './page.module.css'
import exstyles from './bootstrap-extend.module.css'
import cstyles from './styleBaru.module.css'
import ionstyle from './ionicons.module.css'
import bootstrap from '/public/plugin/assets/bootstrap-4.3.1/css/bootstrap.css'
import masterStyle from '/public/plugin/minimallite/minimallite-admin-main/css/master_style.css'

export default function Home() {
  useEffect(() => {
    const init = async () => {
    const { Carousel, initTWE } = await import("tw-elements");
    initTWE({ Carousel });
    };
    init();
}, []);

  return (
    <body style={{ background: 'url(plugin/assets/images/backgrounds/1.jpg) center center' }}>
    <div className={`${styles.row} ${styles['h-100']} ${styles['d-flex']} ${styles['align-items-center']}`}>
  <div className={`${styles['col-lg-6']} ${styles['pr-0']} ${styles['d-sm-block']} ${styles['d-md-block']} ${styles['d-lg-block']}`}>
    <div className={`${styles['d-flex']} ${styles['flex-column']}`}>
      <div className={bstyles['loginannounce-left']}>
        <div className={bstyles['login-box']}>
          <div className={bstyles['login-logo']}>
          <a href="#">
                <img
                src="plugin/placeholders/companylogos/companylogo.png"
                alt="Mimin"
                width="250px"
                />
            </a>
          </div>
          {/* /.login-logo */}
          <div className={`${bstyles['login-box-header']} ${exstyles['px-20']} ${exstyles['pt-20']} ${exstyles['pb-10']} ${styles['text-center']}`}>
            <h3 className={exstyles['font-size-18']}>
              <b className={`${bstyles['color-cyan']} ${exstyles['font-weight-600']}`}>Masuk</b> ke akun Anda
            </h3>
          </div>
          {/* /.login-box-header */}
          <div className={`${bstyles['login-box-body']} ${styles['shadow-none']}`}>
            <form
              id="login-form"
              className={cstyles['form-element']}
              method="POST"
              action="http://app.mimin.io/login"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="9jH6HLTYq8t0tiossF25aOtJ0IkjxCYzhtLAqWK7"
              />{" "}
              <div className={`${styles['form-group']} ${cstyles['has-feedback']}`}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={styles['form-control']}
                  placeholder="Email"
                  required=""
                  defaultValue=""
                />
                {/**/ }
                <span className={`${cstyles.ion} ${ionstyle['ion-email']} ${cstyles['form-control-feedback']}`}/>
                <span className={styles['invalid-feedback']}role="alert">
                {/**/}
                  <strong>silahkan cek email</strong>
                </span>
              </div>
              {/**/}
              <div className={`${styles['form-group']} ${cstyles['has-feedback']}`}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={styles['form-control']}
                  placeholder="Kata sandi"
                  required=""
                  defaultValue=""
                />
                {/**/}
                <span
                  className={`${cstyles.ion} ${ionstyle['ion-eye']} toggle-password`}
                  toggle="#password"
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    bottom: 18,
                    right: 0,
                    width: 34,
                    height: 24,
                    textAlign: "center"
                  }}
                />
                <span
                  className={cstyles['form-control-feedback']}
                  style={{ display: "none" }}
                />
                <span className={styles[`invalid-feedback`]} role="alert">
                  <strong>silahkan cek kata sandi</strong>
                </span>
              </div>
              <div className={styles.row}>
                <div className={styles['col-6']}>
                  <div className={`${bstyles['checkbox']} ${bstyles['text-link']}`}>
                    <input type="checkbox" id="basic_checkbox_1" />
                    <label className={exstyles['pl-25']} htmlFor="basic_checkbox_1">
                      Tetap masuk
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className={styles['col-6']}>
                  <div className={`${cstyles['fog-pwd']} ${styles['text-right']}`}>
                    <a
                      href="/forgot"
                      className={cstyles['text-link']}
                    >
                      <i className={`ion ion-locked ${styles['pr-1']}`} />
                      Lupa kata sandi?
                    </a>
                    <br />
                  </div>
                </div>
                {/* /.col */}
                <div className={`${styles['col-12']} ${styles['text-center']}`}>
                  <button
                    type="submit"
                    id="login"
                    className={`${styles.btn} ${cstyles['btn-cyan']} ${styles['btn-block']} ${bstyles['margin-top-10']}`}
                    title="Login"
                  >
                    LOGIN
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            {/* /.social-auth-links */}
            <div className={`${bstyles['margin-top-30']} ${styles['text-center']}`}>
              <p>
                Belum punya akun?{" "}
                <a
                  href="/register"
                  className={`${bstyles['text-link']} ${cstyles['color-primary-red']} m-l-5`}
                >
                  Daftar
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* /.login-box-body */}
      </div>
    </div>
  </div>
  
  <div
    className={`${styles['col-lg-6']} ${styles['pl-0']}`}>
    <div className={cstyles['loginannounce-right']}>
    <div
    class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-twe-carousel-indicators>
    <button
      type="button"
      data-twe-target="#carouselExampleIndicators"
      data-twe-slide-to="0"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-twe-target="#carouselExampleIndicators"
      data-twe-slide-to="1"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-twe-target="#carouselExampleCaptions"
      data-twe-slide-to="2"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>
  

    <div id="carouselExampleSlidesOnly" className="relative" data-twe-carousel-init data-twe-ride="carousel">
    {/*carousel-items*/}
    <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    {/*first item*/}
    <div
      class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item
      data-twe-carousel-active>
      <img
        src="plugin/assets/images/image-placeholders/background.jpg"
        class="block w-full"
        alt="First slide" />
    </div>
    {/*second item*/}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item>
      <img
        src="plugin/assets/images/image-placeholders/background2.jpg"
        className="block w-full"
        alt="Second slide" />
    </div>
    {/*Third items*/}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item>
      <img
        src="plugin/assets/images/image-placeholders/background3.jpg"
        className="block w-full"
        alt="Third slide" />
    </div>
    </div>
    </div>
    </div>
  </div>
</div>
</body>

  );
}
