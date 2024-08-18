import Blogs from "../components/Blogs/Blogs";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";

const BlogPage = () => {
  return (
    <>
      <Header />
      <div className="blog-page">
        <Blogs />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
