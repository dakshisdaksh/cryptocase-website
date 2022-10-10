import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";

const PrivacyPolicyArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-privacy-policy-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb_dec--50">
                <div className="offset-lg-2 col-lg-8 ">
                    <div className="privacy-wrapper">
                        <h4>Privacy Policy</h4>
                        <p>This Privacy Policy explains how information about the user (“You” or “Your”) is collected, used, and disclosed by Cryptocase ("CryptocaseHQ","Cryptocase", "We", “Our” or "Us"). This Privacy Policy applies to information We collect when You use Our website and other online products and services that link to this Privacy Policy (collectively, the "Services").</p>
                        <p>By visiting Our Site, purchasing, accessing or using Our Services, You are agreeing to the terms of this Privacy Policy, the data practices describes hereunder, and the accompanying Terms of Use. Terms with the first letters capitalised and not defined in this Privacy Policy shall have the meaning scribed to them in the Terms of Use available here</p>

                        <h4>Information You Provide to Us</h4>
                        <p>We collect information You provide directly to Us. We collect information when You create an account, participate in any interactive feature of the Services, fill out a form, complete an exchange transaction, request customer support or otherwise communicate with us, including:</p>
                        <p>Login Information: Your name, Aadhaar Number, PAN card number, email address, phone number, certain virtual currency information, and any other information You choose to provide during registration or at any other time while using Your account or Our Services. This Login Information is used by Our sales, support and product teams to contact Our Site visitors and customers, as appropriate, for the purpose of providing the requested information, support, Services, newsletters, or other news, materials or updates regarding Our Services.</p>
                        <p>Transaction Information: We collect transaction related information for transactions conducted by End Users through the Services (“Transactions”). Transaction information includes price, quantity, and any associated or supporting data related to the trade. Transaction information is used to provide the Services, facilitate the Transactions, provide support, and to operate, maintain and improve the Services.</p>
                        <p>Billing Information: We collect billing and payment information which may include a subscription number, an account number, credit card number, expiration date, billing zip code, bitcoin-related information, exchange market information, instructions for wire transfers and/or ACH transfers (“Billing Information”) from Subscribers (and not End Users). Billing Information is collected and processed by Our third-party payment processor operating as Our agent (See, Onward Transfers to Third Parties). We do not directly obtain or process any Billing Information; except in the case of ACH transfers in which case we obtain the Billing Information related to ACH transfers and send (not store) it to Our third party bank processors operating as Our agent (See, Onward Transfers to Third Parties).</p>
                        <p>API Key: We collect an application programming interface key (“API Key”) of other exchanges which hold Your funds from You to place orders, as specified in the Terms of Use. In the event an API Key is lost, stolen, misused or malfunctions, We shall not be liable for any losses incurred by You.</p>

                        <h4>Information We collect Automatically when You Use the Services</h4>
                        <p>As of right now, We do not collect any Information from you when you use the services.</p>

                        <h4>Information Collected by Cookies and other Tracking technologies</h4>
                        <p>Our service providers may use various technologies to collect information, including cookies and web beacons.</p>
                        <p>We may also use cookies stored in emails to help us confirm Your receipt of, and response to, such emails. Web beacons are electronic images that may be used in Our Services or emails and help deliver cookies, count visits, and understand usage and campaign effectiveness.</p>
                        <p>We may also use cookies stored in emails to help us confirm Your receipt of, and response to, such emails. Web beacons are electronic images that may be used in Our Services or emails and help deliver cookies, count visits, and understand usage and campaign effectiveness.</p>

                        <h4>Use of Information</h4>
                        <p>We may use information about You for various purposes, including to:</p>
                        <ul>
                            <li><p>Provide, maintain, and improve Our Services;</p></li>
                            <li><p>Provide and deliver the products and services You request, process transactions, and send You related information, including confirmations and invoices;</p></li>
                            <li><p>Send You technical notices, updates, security alerts, and support and administrative messages;</p></li>
                            <li><p>Respond to Your comments, questions and requests, and provide customer service;</p></li>
                            <li><p>Resolve disputes and troubleshoot problems;</p></li>
                            <li><p>Monitor and analyze trends, usage, and activities in connection with Our Services;</p></li>
                            <li><p>Data such as backtesting, user action and processed data for internal and external services can be shared with third parties without Your consent;</p></li>
                            <li><p>Link or combine with information We get from others to help understand Your needs and provide You with better service; and</p></li>
                            <li><p>Carry out any other purpose for which the information was collected.</p></li>
                        </ul>

                        <h4>Sharing and Disclosure</h4>
                        <p>The information shared by You with Us will not be shared or disclosed with any other user or third party except for any anonymized information used for analytics and to make payments, and may also be disclosed if necessary in accordance with the applicable laws. However, the information shared by You may be disclosed to external service providers such as KYC services and/ or Google Analytics etc., to assist Us in collating and analysing User information and enabling us to make the use of the Services and the Site more user-friendly.</p>
                        <p>In the event Your personal information is required to be shared with any authority in compliance to the applicable existing laws of any appropriate and applicable jurisdiction, You will provide Your prior written consent to Us within 5 (Five) days, after which (in case of no response from You), We will be permitted to disclose such personal information of Yours with the said authority.</p>
                        <p>Your payment and transaction details will not be shared with other users or third parties under any circumstances.</p>

                        <h4>Retention of Personal Information</h4>
                        <p>We will retain Your personal information in a form that identifies You only for as long as it serves the purpose(s) for which it was initially collected as stated in this Privacy Policy, or subsequently authorized. We may continue processing Your personal information for a period beyond such period, but only for the time and to the extent such processing reasonably serves the purposes of archiving in the public interest, journalism, literature and art, scientific or historical research and statistical analysis, and subject to the protection of this Privacy Policy. After such time periods have expired, We may either delete Your personal information or retain it in a form such that it does not identify You personally.</p>

                        <h4>Links to Third-Party Websites</h4>
                        <p>If You leave the Services and share information through any third-party website, such as Facebook or LinkedIn, then that information is not covered by this Policy and will be subject to the terms of use and privacy policies of the concerned third-party websites.</p>

                        <h4>Amendments to This Policy</h4>
                        <p>If You do not agree to, or wish to continue under, the amended Privacy Policy, You may terminate Your membership in accordance with the Terms of Use.</p>

                        <h4>Clarifications</h4>
                        <p>If You have any queries regarding this Privacy Policy, please contact us at daksh@cryptocasehq.com.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

PrivacyPolicyArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
PrivacyPolicyArea.defaultProps = {
    space: 1,
};

export default PrivacyPolicyArea;
