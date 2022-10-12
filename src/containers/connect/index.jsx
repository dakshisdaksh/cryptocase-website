import PropTypes from "prop-types";
import clsx from "clsx";

const ConnectArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-connect-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g mb--50 mb_md--30 mb_sm--30 align-items-center">
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <h1 className="connect-title">
                        Get Started in 3 Simple Steps
                    </h1>
                    <br />
                </div>
            </div>
            <div className="row g-5">
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="500"
                >
                    <div>
                        <div>
                            <center>
                                <img
                                    src="/images/phone.png"
                                    alt="feature phone"
                                    width={370}
                                    height={650}
                                    style={{ opacity: 0.85 }}
                                />
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 justify-content-center">
                    <div className="row g-5">
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            style={{ width: "100%", marginTop: "15em" }}
                        >
                            <center>
                                <p style={{ textAlign: "left" }}>
                                    <a
                                        style={{ color: "blue" }}
                                        href="https://play.google.com/store/apps/details?id=app.cryptocase.cryptocase"
                                    >
                                        ANDROID APP AVAILABLE
                                    </a>
                                </p>
                                <h2 style={{ textAlign: "left" }}>
                                    Create an Account
                                </h2>
                                <p style={{ textAlign: "left" }}>
                                    Download the app and add your name, phone,
                                    email, and KYC details. Start investing in 2
                                    minutes.
                                </p>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-6 justify-content-center">
                    <div className="row g-5">
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            style={{ width: "100%", marginTop: "15em" }}
                        >
                            <center>
                                <p style={{ color: "blue", textAlign: "left" }}>
                                    WHAT ARE YOU BULISH ON?
                                </p>
                                <h2 style={{ textAlign: "left" }}>
                                    Select your Cryptocase
                                </h2>
                                <p style={{ textAlign: "left" }}>
                                    Select a basket of coins best suited to your
                                    risk tolerance. Diversify your portfolio to
                                    increase returns.
                                </p>
                            </center>
                        </div>
                    </div>
                </div>
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="500"
                >
                    <div>
                        <div>
                            <center>
                                <img
                                    src="/images/phone1.png"
                                    alt="feature phone"
                                    width={370}
                                    height={650}
                                    style={{ opacity: 0.85 }}
                                />
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="500"
                >
                    <div>
                        <div>
                            <center>
                                <img
                                    src="/images/phone2.png"
                                    alt="feature phone"
                                    width={370}
                                    height={650}
                                    style={{ opacity: 0.85 }}
                                />
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 justify-content-center">
                    <div className="row g-5">
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                            style={{ width: "100%", marginTop: "15em" }}
                        >
                            <center>
                                <p style={{ textAlign: "left", color: "blue" }}>
                                    BUY DIRECTLY WITH YOUR UPI ACCOUNT
                                </p>
                                <h2 style={{ textAlign: "left" }}>
                                    Start investing seamlessly!
                                </h2>
                                <p style={{ textAlign: "left" }}>
                                    Manage your investments by buying crypto
                                    directly from your UPI account. No Wallet
                                    integrations, No Confusion and No Hassle.
                                </p>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ConnectArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
ConnectArea.defaultProps = {
    space: 1,
};

export default ConnectArea;
