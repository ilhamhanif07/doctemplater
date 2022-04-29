import React from "react";
import './Login.css'

export default function Login() {
    return (
        <body className="vertical-layout vertical-menu-modern 1-column  navbar-sticky footer-static bg-full-screen-image  blank-page blank-page" data-open="click" data-menu="vertical-menu-modern" data-col="1-column" >
            <div className="app-content content background_peta" style={{ backgroundImage: 'url(' + require('../../assets/gambarPeta.jpeg') + ')' }}>
                <div className="content-overlay" />
                <div className="content-wrapper">
                    <div className="content-header row">
                    </div>
                    <div className="content-body">
                        {/* login page start */}
                        <section id="auth-login" className="row flexbox-container">
                            <div className="col-xl-8 col-11">
                                <div className="card bg-authentication mb-0">
                                    <div className="row m-0">
                                        {/* left section image */}
                                        <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                                            <div className="card-content">
                                                <img className="img-fluid" src={require('../../assets/logo-mostrans.png')} alt="branding logo" />
                                            </div>
                                        </div>
                                        {/* right section-login */}
                                        <div className="col-md-6 col-12 px-0">
                                            <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                                                <div className="card-header pb-1">
                                                    <div className="card-title">
                                                        <h4 className="text-center noMargin boldItem">Welcome Admin Legal</h4>
                                                    </div>
                                                </div>
                                                <hr className="onlyMarginBottom"></hr>
                                                <div className="card-content">
                                                    <div className="card-body">
                                                        <form onSubmit={(e) => { }}>
                                                            <div className="form-group mb-50">
                                                                <label className="text-bold-600" htmlFor="exampleInputEmail1">Email address</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email address" /></div>
                                                            <div className="form-group">
                                                                <label className="text-bold-600" htmlFor="exampleInputPassword1">Password</label>
                                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                            </div>
                                                            <p style={{ textAlign: "center" }}>
                                                                {/* <small style={{ color: this.props.colorNote }}>{this.props.noteError}</small> */}
                                                            </p>
                                                            <div className="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">
                                                                <div className="text-left">
                                                                    <div className="checkbox checkbox-sm">
                                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                                        <label className="checkboxsmall" htmlFor="exampleCheck1"><small>Keep me logged in</small></label>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="text-right"><a href="auth-forgot-password.html" className="card-link"><small>Forgot Password?</small></a></div> */}
                                                            </div>
                                                            <button type="submit" className="btn btn_primary_mostrans glow w-100 position-relative">Login<i id="icon-arrow" className="bx bx-right-arrow-alt" /></button>
                                                        </form>
                                                        <hr />
                                                        <div className="text-center"><small className="mr-25">Don't have an account?</small><a href="auth-register.html"><small>Sign up</small></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </body>
    )
}