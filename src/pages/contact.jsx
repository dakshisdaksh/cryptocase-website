import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ContactTopArea from "@containers/contact-top";
import GoogleMapArea from "@containers/google-map";
import Particles from "@ui/particles";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Contact = () => (
    <Wrapper>
        <SEO pageTitle="Contact" />
        <Header />
        <main id="main-content">
            <Particles />
            <Breadcrumb
                pageTitle="Contact Us"
                currentPage="Contact Us"
            />
            <ContactTopArea />
            <GoogleMapArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Contact;
