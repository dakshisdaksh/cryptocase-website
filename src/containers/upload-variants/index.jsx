import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Button from "@ui/button";

const UploadVariants = ({ className, space }) => (
    <div
        className={clsx(
            "rn-upload-variant-area varient",
            space === 1 && "rn-section-gap",
            className
        )}
    >
        <div className="container">
            <div className="row">
                <div className="upload-variant-title-wrapper">
                    <h3 className="title text-center">Download the Mudrex App</h3>
                    <p className="text-center">
                        Scan QR code to dowanload the app or click on the links below 
                    </p>
                </div>
            </div>
            <div className="row g-5 mt--40">
                <div className="offset-lg-3 col-lg-3 col-md-6 col-12">
                    <div className="upload-variant-wrapper">
                        <div className="variant-preview">
                            <Image
                                src="/images/qr_android.png"
                                alt="nuron-single"
                                width={440}
                                height={400}
                                layout="responsive"
                            />
                        </div>
                        <Button
                            path=""
                            size="medium"
                            fullwidth
                            className="mt--20"
                        >
                            <img src="/images/google-play.png" width={"30em"} height="fit-content" /> Get it on Google Play
                        </Button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="upload-variant-wrapper">
                        <div className="variant-preview">
                            <Image
                                src="/images/qr_android.png"
                                alt="nuron-single"
                                width={440}
                                height={400}
                                layout="responsive"
                            />
                        </div>
                        <Button
                            path=""
                            size="medium"
                            fullwidth
                            className="mt--20"
                        >
                            <img src="/images/apple.png" width={"30em"} height="fit-content" /> Available on the App Store
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

UploadVariants.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

UploadVariants.defaultProps = {
    space: 1,
};

export default UploadVariants;
