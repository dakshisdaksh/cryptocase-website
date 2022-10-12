import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Logo from "@components/logo";
import MainMenu from "@components/menu/main-menu";
import MobileMenu from "@components/menu/mobile-menu";
import ColorSwitcher from "@components/color-switcher";
import BurgerButton from "@ui/burger-button";
import { useOffcanvas, useSticky } from "@hooks";
import Button from "@ui/button";
import PlaceBidModal from "@components/modals/placebid-modal";
import headerData from "../../../data/general/header-01.json";
import menuData from "../../../data/general/menu-01.json";

const Header = ({ className }) => {
    const sticky = useSticky();
    const { offcanvas, offcanvasHandler } = useOffcanvas();

    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };

    return (
        <>
            <header
                className={clsx(
                    "rn-header haeder-default black-logo-version header--fixed header--sticky",
                    sticky && "sticky",
                    className
                )}
            >
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            <Logo logo={headerData.logo} />
                            <div className="mainmenu-wrapper">
                                <nav
                                    id="sideNav"
                                    className="mainmenu-nav d-none d-xl-block"
                                >
                                    <MainMenu menu={menuData} />
                                </nav>
                            </div>
                        </div>
                        <div
                            className="header-right"
                            style={{ marginRight: "2em" }}
                        >
                            <div className="setting-option mobile-menu-bar d-block d-xl-none">
                                <div className="hamberger">
                                    <BurgerButton onClick={offcanvasHandler} />
                                </div>
                            </div>
                            <div className="setting-option header-btn">
                                <div className="icon-box">
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn"
                                        size="small"
                                        onClick={handleBidModal}
                                    >
                                        Invest Now
                                    </Button>
                                </div>
                            </div>
                            <PlaceBidModal
                                show={showBidModal}
                                handleModal={handleBidModal}
                            />
                            <div
                                id="my_switcher"
                                className="setting-option my_switcher"
                            >
                                <ColorSwitcher />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                menu={menuData}
                logo={headerData.logo}
            />
        </>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
