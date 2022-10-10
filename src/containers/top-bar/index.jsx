import Anchor from "@ui/anchor";
import ColorSwitcher from "@components/color-switcher";
import BurgerButton from "@ui/burger-button";
import MobileMenu from "@components/menu/mobile-menu-02";
import { useOffcanvas } from "@hooks";

// Demo Data
import sideMenuData from "../../data/general/menu-02.json";

const TopBarArea = () => {
    const { offcanvas, offcanvasHandler } = useOffcanvas();
    return (
        <>
            <div className="rn-top-bar-area">
                <div className="contact-area">
                    <div className="setting-option">
                        <div className="icon-box">
                            <Anchor title="Contact With Us" path="/contact">
                                <i className="feather-phone" />
                            </Anchor>
                        </div>
                    </div>
                    <div className="setting-option mobile-menu-bar ml--5 d-block d-lg-none">
                        <div className="hamberger icon-box">
                            <BurgerButton onClick={offcanvasHandler} />
                        </div>
                    </div>
                    <div
                        id="my_switcher"
                        className="my_switcher setting-option"
                    >
                        <ColorSwitcher />
                    </div>
                </div>
            </div>
            <MobileMenu
                menu={sideMenuData}
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                logo={[
                    { src: "/cryptocase.png" },
                    { src: "/cryptocase.png" },
                ]}
            />
        </>
    );
};

export default TopBarArea;
