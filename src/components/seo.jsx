import Head from "next/head";
import PropTypes from "prop-types";

const SEO = ({ pageTitle }) => (
    <Head>
        <title> {pageTitle} || Cryptocase</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
            name="description"
            content="Investing made easy with Cryptocase."
        />
        <meta name="robots" content="noindex, follow" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/cryptocase.png" />
    </Head>
);

SEO.propTypes = {
    pageTitle: PropTypes.string.isRequired,
};

export default SEO;
