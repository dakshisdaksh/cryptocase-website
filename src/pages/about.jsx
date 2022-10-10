import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import AboutArea from "@containers/about/layout-02";
import FunfactArea from "@containers/funfact";
import BlogArea from "@containers/blog/layout-01";
import { normalizedData } from "@utils/methods";
import { getAllPosts } from "../lib/api";

// Demo data
import aboutData from "../data/innerpages/about.json";
import Particles from "@ui/particles";

const About = ({ posts }) => {
    const content = normalizedData(aboutData?.content || []);
    return (
        <Wrapper>
            <SEO pageTitle="About" />
            <Header />
            <main id="main-content">
                <Particles />
                <AboutArea data={content["about-section"]} />
                <FunfactArea data={content["funfact-section"]} />
                <BlogArea data={{ ...content["blog-section"], posts }} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export async function getStaticProps() {
    const posts = getAllPosts([
        "title",
        "date",
        "slug",
        "image",
        "category",
        "timeToRead",
    ]);

    return {
        props: {
            posts: posts.slice(0, 3),
            className: "template-color-1",
        },
    };
}

About.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default About;
