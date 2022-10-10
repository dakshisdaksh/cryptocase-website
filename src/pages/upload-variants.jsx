import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import UploadVariants from "@containers/upload-variants";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => (
    <Wrapper>
        <SEO pageTitle="Start Investing" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Start Investing" />
            <UploadVariants />
        </main>
        <Footer />
    </Wrapper>
);

export default Home;
