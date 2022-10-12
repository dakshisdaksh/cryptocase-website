import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import BlogCard from "@components/blog/blog-card";
import { SectionTitleType } from "@utils/types";

const BlogArea = ({ space, className, data }) => (
    <center>
        <div
            className={clsx(
                "rn-blog-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
            style={{ width: "100%" }}
        >
            <div className="container" style={{ width: "100%" }}>
                <div
                    className="row mb--50 align-items-center"
                    style={{ width: "100%" }}
                >
                    <div
                        className="col-lg-6 col-md-6 col-sm-6 col-12"
                        style={{ width: "100%" }}
                    >
                        {data?.section_title && (
                            <SectionTitle
                                className="mb--0"
                                {...data.section_title}
                            />
                        )}
                    </div>
                </div>
                <div className="row g-5 justify-content-center">
                    {data?.posts?.map((post) => (
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-12"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            data-sal-delay="150"
                            key={post.slug}
                        >
                            <BlogCard
                                title={post.title}
                                category={post.category}
                                image={post.image}
                                description={post.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </center>
);

BlogArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        posts: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

BlogArea.defaultProps = {
    space: 1,
};

export default BlogArea;
