import styles from "./app.module.css";
import bstyles from './page.module.css'
import exstyles from './bootstrap-extend.module.css'
import cstyles from './styleBaru.module.css'
import bootstrap from '/public/plugin/assets/bootstrap-4.3.1/css/bootstrap.css'
import masterStyle from '/public/plugin/minimallite/minimallite-admin-main/css/master_style.css'

const ForgetPassword = () => {

    return (
    <body style={{ background: 'url(plugin/assets/images/backgrounds/1.jpg) center center' }}>
    <div className={`${styles.row} ${styles['h-100']} ${styles['d-flex']} ${styles['align-items-center']}`}>
    <div className={`${styles['col-lg-12']} ${styles['pr-0']}`}>
        <div className={`${styles['d-flex']} ${styles['flex-column']}`}>
        <div className={bstyles['login-box']}>
            <div className={`${bstyles['login-box-header']} ${exstyles['px-20']} ${exstyles['pt-20']} ${exstyles['pb-10']} ${styles['text-center']}`}>
            <a href="#">
                <img
                src="plugin/placeholders/companylogos/companylogo.png"
                alt="Mimin"
                width="250px"
                />
            </a>
            <h3 className={exstyles['font-size-18']}>
                <b className={`${bstyles['color-cyan']} ${exstyles['font-weight-600']}`}>Password</b> baru
            </h3>
            </div>
            {/* /.login-box-header */}
            <div className={`${bstyles['login-box-body']} ${styles['shadow-none']}`}>
            <form
                id="login-form"
                className={cstyles['form-element']}
                method="POST"
                action="/login"
            >
            <div className={`${styles['form-group']} ${cstyles['has-feedback']}`}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={`${styles['form-control']} email`}
                    placeholder="Email"
                    required=""
                    defaultValue=""
                />
                <span
                    className= {cstyles['form-control-feedback']}
                    style={{ display: "none" }}
                />
                <span className={styles['invalid-feedback']} role="alert">
                    <strong>silahkan cek kata email</strong>
                </span>
                </div>
                <div className={styles.row}>
                {/* /.col */}
                <div className={`${styles['col-12']} ${styles['text-center']}`}>
                    <button
                    type="button"
                    id="reset"
                    className={`${styles.btn} ${cstyles['btn-cyan']} ${styles['btn-block']} ${bstyles['margin-top-10']}`}
                    title="Reset"
                    >
                    ATUR ULANG KATA SANDI
                    </button>
                </div>
                {/* /.col */}
                </div>
            </form>
            {/* /.social-auth-links */}
            <div className={`${bstyles['margin-top-30']} ${styles['text-center']}`}>
                <p>
                Ingat kata sandi Anda?{" "}
                <a
                    href="/login"
                    className={`${bstyles['text-link']} ${cstyles['color-primary-red']} m-l-5`}
                >
                    Login
                </a>
                </p>
            </div>
            </div>
            {/* /.login-box-body */}
        </div>
        </div>
    </div>
    </div>
    </body>
        )
    }

export default ForgetPassword