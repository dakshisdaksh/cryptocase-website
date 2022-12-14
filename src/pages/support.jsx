import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ServiceArea from "@containers/services/layout-01";
import SupportArea from "@containers/support";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Support = () => (
    <Wrapper>
        <SEO pageTitle="Support" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Frequently Asked Questions"
                currentPage="FAQ"
            />
            <center>
                <h1 style={{ marginBottom: "-2em" }}>Frequently Asked Questions</h1>
            </center>
            <ServiceArea />
            <SupportArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Support;
