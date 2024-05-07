import styles from "./app.module.css";
import allstyles from './all.module.css'
import cstyles from './styleBaru.module.css'
import gridstyle from './gridstack.module.css'
import exstyles from './bootstrap-extend.module.css'
import iestyles from './ie7.module.css'
const Dashboard = () => {
    
    return (
        <>
    {/* Content Header (Page header) */}
    <section className={cstyles['content-header']}>
        <h1>Beranda</h1>
        <ol className={styles.breadcrumb}>
        <li className={`${styles['breadcrumb-item']} active`}>
            <i className={`${allstyles.fa} ${allstyles['fa-home']}`} /> Beranda
        </li>
        </ol>

        <div className={`${cstyles['content-header-buttons']} withdraw-btn`}></div>
    </section>
    {/* Main content */}
    <section className={allstyles.content} id="ContentDashboard">
        {/*-//////////////////////-*/}
        <div className={styles.row}>
        <div className={styles['col-12']}>
            <div
            className={`${gridstyle['grid-stack']} ${cstyles['grid-stack-nomargin']}`}
            data-gs-width={12}
            data-gs-animate="yes"
            >
            <div
                className={gridstyle['grid-stack-item']}
                data-gs-x={0}
                data-gs-y={0}
                data-gs-width={12}
                data-gs-height={3}
            >
                <div className={cstyles['grid-stack-item-content']}>
                {/* AREA CHART */}
                <div className={`${cstyles.box} ${styles['mb-0']}`}>
                    <div
                    className={`${cstyles['box-header']} ${cstyles['with-border']} ${styles['text-left']}`}
                    id="chart_date"
                    >
                    <div className={styles['input-group']}>
                        <button
                        type="button"
                        className={`${styles.btn} ${styles['btn-default']} pull-right ${exstyles['font-size-12']} ${styles['flex-grow']}`}
                        style={{
                            overflow: "hidden !important",
                            textOverflow: "ellipsis !important"
                        }}
                        id="daterange-btn-1"
                        title="Tanggal Mulai"
                        >
                        <input
                            type="hidden"
                            id="start_date_first_periode"
                            defaultValue="{{ date('Y-m-01') }}"
                        />
                        <input
                            type="hidden"
                            id="end_date_first_periode"
                            defaultValue="{{ date('Y-m-d') }}"
                        />
                        <span className={exstyles['font-size-12']}>
                            {"{"}
                            {"{"} date('01 F Y') {"}"}
                            {"}"} - {"{"}
                            {"{"} date('d F Y') {"}"}
                            {"}"}
                        </span>
                        <i className={`${exstyles['font-size-14']} ${allstyles.fa} ${allstyles['fa-caret-down']}`} />
                        </button>
                        <div className={`${styles['input-group']} ${styles['mt-3']}`}>
                        <button
                            type="button"
                            id="submit"
                            className={`${styles.btn} ${cstyles['btn-softgreen']}`}
                            title="Filter"
                            style={{
                            width: "100%",
                            backgroundColor: "#0096a2",
                            borderColor: "#0096a2"
                            }}
                        >
                            Filter
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* /.box-body */}
                </div>
                {/* /.box */}
                </div>
            </div>
            <div
                className={gridstyle['grid-stack-item']}
                id="box-required"
                data-gs-x={0}
                data-gs-y={6}
                data-gs-width={6}
                data-gs-height={12}
                style={{ visibility: "visible" }}
            >
                <div className={cstyles['grid-stack-item-content']}>
                <div className={`${cstyles.box} ${cstyles['box-solid']}`}>
                    <div className={`${cstyles['box-header']} ${cstyles['with-border']} ${styles['text-left']}`}>
                    <h3 className={cstyles['box-title']}>Hai, lengkapi data toko kamu</h3>
                    </div>
                    {/* /.box-header */}
                    <div className={cstyles['box-body']}>
                    <div className={`${styles['text-left']} ${styles['d-flex']} ${styles['justify-content-start']} ${styles['align-items-center']}`}>
                        <h3 className={styles['text-left']}></h3>
                        <h3 className={`langkah ${styles['mr-1']}`} />
                        Langkah lagi
                    </div>
                    <div className={styles.progress}>
                        <div
                        className={`${styles['progress-bar']} ${exstyles['progress-bar-danger']} ${styles['progress-bar-striped']} ${styles['progress-bar-animated']}`}
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        >
                        <span className={allstyles['sr-only']}>60% Complete (warning)</span>
                        </div>
                    </div>
                    
                    </div>
                    {/* /.box-body */}
                </div>
                </div>
            </div>
            <div
                className={gridstyle['grid-stack-item']}
                data-gs-x={0}
                data-gs-y={6}
                data-gs-width={12}
                data-gs-height={6}
            >
                <div className={cstyles['grid-stack-item-content']}>
                <a
                    href="/reportRevenue"
                    className={`${cstyles.statwidget} ${cstyles['bgcolor-cyan']} ${cstyles['color-white']}`}
                >
                    <div>
                    <i className={`${allstyles.fas} fa-line-chart ${exstyles['font-size-30']}`} />
                    <span id="total_revenue" />
                    </div>
                    <p>
                    {" "}
                    Total Penjualan <i className={`${allstyles.fas} ${allstyles['fa-arrow-right']} ${styles['ml-1']}`}/>
                    </p>
                </a>
                </div>
            </div>
            <div
                className={gridstyle['grid-stack-item']}
                data-gs-x={0}
                data-gs-y={12}
                data-gs-width={6}
                data-gs-height={3}
            >
                <div className={cstyles['grid-stack-item-content']}>
                <a
                    href="/reportProduct"
                    className={`${cstyles.statwidget} ${cstyles['bgcolor-softgreen']} ${cstyles['color-white']}`}
                >
                    <div>
                    <i className={`${allstyles.fas} ${allstyles['fa-briefcase']} ${exstyles['font-size-30']}`} />
                    <span id="product_sold" />
                    </div>
                    <p>
                    Produk Terjual <i className={`${allstyles.fas} ${allstyles['fa-arrow-right']} ${styles['ml-1']}`} />
                    </p>
                </a>
                </div>
            </div>
            <div
                className={gridstyle['grid-stack-item']}
                data-gs-x={0}
                data-gs-y={9}
                data-gs-width={6}
                data-gs-height={3}
            >
                <div className={cstyles['grid-stack-item-content']}>
                <a
                    href="/reportOrder"
                    className={`${cstyles.statwidget} ${cstyles['bgcolor-orange']} ${cstyles['color-white']}`}
                >
                    <div>
                    <i className={`${allstyles.fas} ${allstyles['fa-cart-arrow-down']} ${exstyles['font-size-30']}`} />
                    <span id="total_order" />
                    </div>
                    <p>
                    {" "}
                    Total Pesanan <i className={`${allstyles.fas} ${allstyles['fa-arrow-right']} ${styles['ml-1']}`} />
                    </p>
                </a>
                </div>
            </div>
            <div
                className={gridstyle['grid-stack-item']}
                data-gs-x={6}
                data-gs-y={9}
                data-gs-width={6}
                data-gs-height={3}
            >
                <div className={cstyles['grid-stack-item-content']}>
                <a
                    href="/orders"
                    className={`${cstyles.statwidget} ${cstyles['bgcolor-purple']} ${cstyles['color-white']}`}
                >
                    <div>
                    <i className={`${allstyles.fas} ${allstyles['fa-shopping-bag']} ${exstyles['font-size-30']}`} />
                    <span id="completed_order" />
                    </div>
                    <p>
                    {" "}
                    Pesanan Selesai <i className={`${allstyles.fas} ${allstyles['fa-arrow-right']} ${styles['ml-1']}`} />
                    </p>
                </a>
                </div>
            </div>
            <div
                className={gridstyle['grid-stack-item']}
                data-gs-x={6}
                data-gs-y={12}
                data-gs-width={6}
                data-gs-height={3}
            >
                <div className={cstyles['grid-stack-item-content']}>
                <a
                    href="/orders"
                    className={`${cstyles.statwidget} ${cstyles['bgcolor-green']} ${cstyles['color-white']}`}
                >
                    <div>
                    <i className={`${allstyles.fas} ${allstyles['fa-cart-plus']} ${exstyles['font-size-30']}`} />
                    <span id="new_order" />
                    </div>
                    <p>
                    Pesanan Baru <i className={`${allstyles.fas} ${allstyles['fa-arrow-right']} ${styles['ml-1']}`} />
                    </p>
                </a>
                </div>
            </div>
            <div
                className={gridstyle['grid-stack-item']}
                data-gs-x={0}
                data-gs-y={18}
                data-gs-width={12}
                data-gs-height={5}
            >
                <div className={cstyles['grid-stack-item-content']}>
                <a
                    href="/orders"
                    className={`${cstyles.statwidget} ${cstyles['bgcolor-blue']} ${cstyles['color-white']}`}
                >
                    <div style={{ fontSize: "80%", marginBottom: 40 }}>
                    {" "}
                    Status Pesanan
                    </div>
                    <div className={styles.row}>
                    <div className={`${styles.col} ${exstyles['font-size-40']}`}>
                        <span id="status_new_order" />
                        <hr
                        style={{
                            borderTop: "1px solid",
                            borderColor: "#ffffff",
                            width: 125
                        }}
                        className="my-1"
                        />
                        <small style={{ fontSize: "50%" }}>Pesanan Baru</small>
                    </div>
                    <div className={`${styles.col} ${exstyles['font-size-40']}`}>
                        <span id="status_processing" />
                        <hr
                        style={{
                            borderTop: "1px solid",
                            borderColor: "#ffffff",
                            width: 125
                        }}
                        className={styles['my-1']}
                        />
                        <small style={{ fontSize: "50%" }}>Diproses</small>
                    </div>
                    <div className={`${styles.col} ${exstyles['font-size-40']}`}>
                        <span id="status_ongoing" />
                        <hr
                        style={{
                            borderTop: "1px solid",
                            borderColor: "#ffffff",
                            width: 125
                        }}
                        className={styles['my-1']}
                        />
                        <small style={{ fontSize: "50%" }}>Dikirim</small>
                    </div>
                    <div className={`${styles.col} ${exstyles['font-size-40']}`}>
                        <span id="status_completed_order" />
                        <hr
                        style={{
                            borderTop: "1px solid",
                            borderColor: "#ffffff",
                            width: 125
                        }}
                        className={styles['my-1']}
                        />
                        <small style={{ fontSize: "50%" }}>Pesanan Selesai</small>
                    </div>
                    </div>
                </a>
                </div>
            </div>
            <div
                className={gridstyle['grid-stack-item']}
                data-gs-no-resize="true"
                data-gs-x={0}
                data-gs-y={22}
                data-gs-width={12}
                data-gs-height={10}
            >
                <div className={cstyles['grid-stack-item-content']}>
                {/* AREA CHART */}
                <div className={`${cstyles.box} ${styles['mb-0']}`}>
                    <div
                    className={`${cstyles['box-header']} ${cstyles['with-border']} ${styles['text-left']}`}
                    id="chart_lead"
                    >
                    <h3 className={cstyles['box-title']}>Penjualan</h3>
                    </div>
                    <div
                    className={cstyles['box-body']}
                    id="chart-container"
                    style={{ position: "relative", height: "425px !important" }}
                    >
                    <canvas id="chart-penjualan" />
                    </div>
                    {/* /.box-body */}
                </div>
                {/* /.box */}
                </div>
            </div>
            </div>
        </div>
        </div>
        {/*-//////////////////////-*/}
    </section>
    {/* /.content */}
    <div
        className={`${styles.modal} ${styles.fade} modal-create`}
        role="dialog"
        aria-labelledby="editModal"
        aria-hidden="true"
        style={{ display: "none" }}
        id="addCategoryModal"
    >
        <div className={`${styles['modal-dialog']} ${styles['modal-lg']}`}>
        <div className={styles['modal-content']}>
            <div className={styles['modal-header']}>
            <h4 className={styles['modal-title']} id="editModal">
                Penarikan Dana
            </h4>
            <button
                type="button"
                className={`${styles.close} ${cstyles['btn-close']}`}
                data-dismiss="modal"
                title="Tutup"
                aria-hidden="true"
            >
                <i className={iestyles['ti-close']} />
            </button>
            </div>
            <div className={styles['modal-body']}>
            <form
                className={cstyles['form-element']}
                id="addDisbursement"
                autoComplete="off"
            >
                <div className={styles.row}>
                <div className={styles['col-12']}>
                    <div className={`${styles.row} ${cstyles['small-gutters']}`}>
                    <div className={styles['col-sm-12']}>
                        <div className={styles['form-group']}>
                        <label>
                            Total Dana
                            <span className={cstyles['color-primary-red']}>*</span>
                            <span className="error_msg" id="required_total_dana" />
                        </label>
                        <input
                            type="text"
                            name="total_dana"
                            id="total_dana"
                            className={styles['form-control']}
                            required=""
                            placeholder="Nama Kategori"
                            readOnly=""
                            style={{ backgroundColor: "#f8f8f8" }}
                        />
                        </div>
                    </div>
                    </div>
                </div>
                <div className={styles['col-12']} id="column-password">
                    <div className={`${styles.row} ${cstyles['small-gutters']}`}>
                    <div className={styles['col-sm-12']}>
                        <div className={styles["form-group"]}>
                        <label>
                            Password
                            <span className={cstyles['color-primary-red']}>*</span>
                            <span className="error_msg" id="required_password" />
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className={styles['form-control']}
                            required=""
                            placeholder="Password login"
                            autoComplete="off"
                        />
                        <span
                            className="ion ion-eye toggle-password"
                            toggle="#password"
                            style={{
                            cursor: "pointer",
                            position: "absolute",
                            bottom: 18,
                            right: 0,
                            width: 34,
                            height: 30,
                            textAlign: "center"
                            }}
                        />
                        <span
                            className={exstyles["form-control-feedback"]}
                            style={{ display: "none" }}
                        />
                        <span className={styles["invalid-feedback"]} role="alert">
                            <strong>silahkan cek kata sandi</strong>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={`${styles["col-12"]} table-branch`}>
                    <div className={`${styles.row} ${cstyles['small-gutters']}`} id="product-table">
                    <div className={styles["table-responsive"]}>
                        <table className={`${styles.table} ${styles['table-bordered']} table-md`}>
                        <thead>
                            <tr>
                            <th>Branch</th>
                            <th>Account Name</th>
                            <th>
                                Amount{" "}
                                <span
                                className={cstyles["color-primary-red"]}
                                id="branch_price"
                                >
                                *
                                </span>
                                <span
                                className="error_msg"
                                id="required_branch_price"
                                />
                            </th>
                            </tr>
                        </thead>
                        <tbody id="rowBranch"></tbody>
                        </table>
                    </div>
                    </div>
                </div>
                <div className={styles["col-12"]}>
                    <div className={`${styles.row} ${cstyles["small-gutters"]}`}>
                    <div className={styles["col-sm-12"]}>
                        <div className={styles["form-group"]}>
                        <p>
                            <small>
                            <span className={cstyles["color-primary-red"]}>*</span> Dengan
                            klik "Tarik Dana", Anda setuju dengan{" "}
                            <a
                                className={styles["text-primary"]}
                                target="_blank"
                                href="https://www.mimin.io/terms-of-disbursement"
                            >
                                Ketentuan
                            </a>
                            dari Mimin{" "}
                            </small>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
            </div>
            <div className={`${styles["modal-footer"]} ${styles["text-right"]}`}>
            <button
                type="button"
                className="btn btn-transparent waves-effect px-4 float-left"
                data-dismiss="modal"
                title="Batalkan"
            >
                Batalkan
            </button>
            <button
                type="button"
                className={`${styles.btn} ${cstyles['btn-softgreen']} waves-effect ${styles['px-4']} tarik-dana"`}
                id="save"
                title="Simpan"
            >
                Tarik Dana
            </button>
            </div>
        </div>
        {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
    </div>
    </>

        )
    }


export default Dashboard