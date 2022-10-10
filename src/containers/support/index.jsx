import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import Accordion from "@ui/accordion";
import Particles from "@ui/particles";

const SupportArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-support-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <Particles></Particles>
            <div className="row g-6">
                <div className="col-lg-6">
                    <div className="rn-support-read">
                        <h2>General</h2>
                        <div className="read-card">
                            <h4>1. How is cryptocase different from companies like CoinDCX and WazirX?</h4>
                            <div className="content">
                                <p>
                                    We are not a crypto exchange, but a platform built on top of CoinDCX, Binance and WazirX which are leading crypto exchanges. Once you sign in and complete your verification, all your trades are executed by us on these exchanges.
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>2. What things are taken into account while making Cryptocases?</h4>
                            <div className="content">
                                <p>
                                    We take into account a lot of factors while designing cryptocases. Our main goal is to optimise Risk and Upside Potential of crypto. We build cryptocases around themes and technologies also.
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>3. Where are these investments being made?</h4>
                            <div className="content">
                                <p>
                                    All your investments are being made on CoinDCX and Binance exchange through our APIs. The funds are stored in the Cryptocase wallet on CoinDCX/ Binance.
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>4. Who is the team?</h4>
                            <div className="content">
                                <p>We are all students of BITS Pilani who love the Web 3 Ecosystem.</p>
                                <p>Shrish does Technical Analysis and has managed funds of upwards of 20 Lakhs INR.</p>
                                <p>Daksh has done Product Management at a YC startup and has analysed multiple crypto projects fundamentally.</p>
                            </div>
                        </div>
                        <br />
                        <h2>ASO Text</h2>
                        <div className="read-card">
                            <div className="content">
                                <p>
                                    Cryptocase enables both experienced and novice investors to make well-informed, confident, and prudent investing choices.
                                </p>
                                <p>
                                    Cryptocase helps you invest in crypto baskets for a better investment experience by guaranteeing greater returns through :
                                    <ul>
                                        <li><p><strong>Value Investing</strong></p></li>
                                        <li><p><strong>Diversification</strong></p></li>
                                        <li><p><strong>Data-Driven Investing</strong></p></li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <div className="content">
                                <p>
                                    We want to empower millions of Indians to make the move to digital assets as simple as possible. We handpick and distribute the greatest Crypto tokens on our platform to enable you to make the most money while maintaining a smooth user experience.
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>Features : </h4>
                            <div className="content">
                                <ul>
                                    <li><p>Quick and efficient KYC process to help you get started.</p></li>
                                    <li><p>Easy-to-use User Interface and User Experience.</p></li>
                                    <li><p>Smooth money transfer through UPI.</p></li>
                                    <li><p>Buy Bitcoin, Ethereum, Ripple, Polkadot and 30+ cryptocurrencies.</p></li>
                                    <li><p>The platform is ideal and easy to understand for anyone just starting crypto investing.</p></li>
                                    <li><p>Start investing in a diversified portfolio with just INR 1000!</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="read-card">
                            <div className="content">
                                <p>Invest in cryptocurrency now & start your crypto journey today. <a href="https://play.google.com/store/apps/details?id=app.cryptocase.cryptocase">Download the app</a> now!</p>
                            </div>
                        </div>
                        <Button href="/contact" color="primary-alta">
                            Contact Us
                        </Button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2>Login and KYC</h2>
                    <div className="support-accordion">
                        <Accordion
                            defaultActiveKey={0}
                            items={[
                                {
                                    id: 0,
                                    title: "1. Which documents are required to start investing using cryptocase?",
                                    description:
                                        "<strong>To start investing you need to upload 3 things : </strong><ul><li><p>The first thing you need to upload is your PAN Card. We need this to make sure we can verify who is investing funds on our app.</p></li><li><p>Next, we want to check your identity and verify your address, thus we want to get an image of your aadhaar (front and back)</p></li><li><p>You also need to submit your selfie because we need to check if it’s really you who’s doing the transactions.</p></li></ul>",
                                },
                                {
                                    id: 1,
                                    title: "2. I have completed the kyc procedure but it shows KYC pending. What should I do?",
                                    description:
                                        "We take a <strong>maximum of 24 hours</strong> to complete the KYC process. <strong>This is because we check your KYC very diligently.</strong>",
                                }
                            ]}
                        />
                    </div>
                    <br /><br />
                    <h2>Investing</h2>
                    <div className="support-accordion">
                        <Accordion
                            defaultActiveKey={0}
                            items={[
                                {
                                    id: 0,
                                    title: "1. Who is making these portfolios (investment products)?",
                                    description:
                                        "<strong>We are a team of highly experienced crypto Investors and Developers. We understand the tech side of crypto and have been investing in crypto gaining massive returns over the last few years. You can know more about us on our website <a href='https://cryptocasehq.com/'>cryptocasehq.com</a></strong>",
                                },
                                {
                                    id: 1,
                                    title: "2. Is there a deposit or withdrawal fees?",
                                    description:
                                        "There is <strong>no</strong> hidden fees of any kind on our platform. There is <strong>no</strong> deposit or withdrawal fees. <strong>We only take a flat 0.3% cut on your investment amount as brokerage fees.</strong>",
                                },
                                {
                                    id: 2,
                                    title: "3. How do I confirm my payment?",
                                    description:
                                        "Once you have paid through UPI, your payment would be confirmed <strong>within 24 Hours</strong>. Your app would show the cryptocase that you have bought. <strong>It may be a pending transaction and we resolve every transaction in 24 Hours.</strong>"
                                },
                                {
                                    id: 3,
                                    title: "4. Is cryptocase safer than other crypto investments",
                                    description:
                                        "Cryptocases are a bucket of cryptocoins so it is safer than investing in a single cryptocurrency. This safety is guaranteed by 2 things : <ul><li><p><strong>Diversification</strong> : We diversify tokens and make portfolio according to a Nobel Prize winning concept of making Cryptocases.</p></li><li><p><strong>Value Investing</strong> : We make sure that you invest in only the best quality crypto tokens.</p></li></ul>"
                                },
                                {
                                    id: 4,
                                    title: "5. How do I select a case to invest in?",
                                    description:
                                        "You can select a cryptocase matching your risk appetite or according to the theme or technology that you have a long term belief in. For example, invest in the Crypto Blue Chip cryptocase if you want to have a well diversified but safe investment option. If you are really confused, you can always <strong>call</strong> us or <strong>whatsapp us</strong>."
                                },
                                {
                                    id: 5,
                                    title: "6. Can I add or remove cryptocurrencies from cryptocase on my own?",
                                    description:
                                        "Currently you cannot add or remove cryptocurrencies from cryptocase on your own. Let us know if you want to do something of this sort. We will partner with you to build and ship whatever might help you."
                                }
                            ]}
                        />
                    </div>
                    <h2>General Doubts</h2>
                    <div className="support-accordion">
                        <Accordion
                            defaultActiveKey={0}
                            items={[
                                {
                                    id: 0,
                                    title: "1. Is my data safe?",
                                    description:
                                        "We never share any of your personal data with any third party providers. Personal data could be inclusive but not limited to your crypto holdings through our platform, transaction details, payment details, documents provided for the purpose of identification, KYC documents and so on.",
                                },
                                {
                                    id: 1,
                                    title: "2. What is the minimum amount that I can invest?",
                                    description:
                                        "You can start investing in diversified portfolio with just 1000 rupees. Any investment below this probably ain’t worth investing :P",
                                },
                                {
                                    id: 2,
                                    title: "3. Which payment options are available on cryptocase?",
                                    description: 
                                        "You can add money on cryptocase using  UPI. To login you have to download the app and upload few documents then you can start investing."
                                },
                                {
                                    id: 3,
                                    title: "4. Can I create my own cryptocase?",
                                    description:
                                        "You cannot create your own cryptocase but you can choose from the cryptocases available and form your portfolio."
                                },
                                {
                                    id: 4,
                                    title: "5. Is there a lock in time on cryptocases?",
                                    description:
                                        "No, there is no locking period. You can buy and sell cryptocases as you wish."
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

SupportArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
};
SupportArea.defaultProps = {
    space: 1,
};

export default SupportArea;
