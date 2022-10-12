import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

const PlaceBidModal = ({ show, handleModal }) => (
    <Modal
        className="rn-popup-modal placebid-modal-wrapper"
        show={show}
        onHide={handleModal}
        centered
    >
        {show && (
            <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleModal}
            >
                <i className="feather-x" />
            </button>
        )}
        <Modal.Header>
            <h3 className="modal-title">
                Download{" "}
                <a
                    className="cursor-pointer"
                    href="https://play.google.com/store/apps/details?id=app.cryptocase.cryptocase"
                >
                    Cryptocase
                </a>{" "}
                App
            </h3>
        </Modal.Header>
        <Modal.Body>
            <p style={{ fontSize: "1.1em" }}>
                Scan QR to download the app or click on the link below
            </p>
            <div className="placebid-form-box">
                <div className="bid-content">
                    <div className="bid-content-top">
                        <div className="bid-content-mid" style={{ marginLeft: "6em" }}>
                            <img src="/images/qr_android.png" alt="QR" />
                        </div>
                    </div>
                </div>
                <div className="bit-continue-button">
                    <Button path="/connect" size="medium" fullwidth>
                        <img
                            src="/images/google-play.png"
                            width={"25em"}
                            alt="Google Play"
                        />{" "}
                        Get it on Google Play
                    </Button>
                </div>
            </div>
        </Modal.Body>
    </Modal>
);

PlaceBidModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
};
export default PlaceBidModal;
