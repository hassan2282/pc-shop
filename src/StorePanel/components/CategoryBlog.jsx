import { useEffect, useState } from "react";
import apiClient from "../../apiClient";
import BlogSidebar from "./BlogSidebar"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function CategoryBlog() {

    const BASE_URL = import.meta.env.VITE__BASEURL;
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await apiClient.get('/allBlogs');
                if (res.status >= 200 && res.status < 300) {
                    setBlogs(res.data);
                }

            } catch (err) {
                toast.error('خطا در واکشی مقالات');
            }
        }

        fetchBlog();
    }, []);


    const formatDate = (date) => {
        return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(new Date(date));
    };



    return (
        <div>
            <main className="category-blog default space-top-30">
                <div className="container ">

                    <div className="row">
                        <div className="col-12">
                            <nav>
                                <ul className="breadcrumb">
                                    <li>
                                        <i className="fa fa-home" aria-hidden="true"></i>
                                    </li>

                                    <li>
                                        <a href="#"><span>بلاگ</span></a>
                                    </li>
                                    <li>
                                        <a href="category-blog.html"><span>اخبار روز تکنولوژی</span></a>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className="single_blog_content cat_blog_content col-12 col-lg-9 mx-auto order-1 order-sm-1 ">

                            <div className="row listing-items Blog-category">
                                {
                                    blogs &&
                                    blogs.map((blog, index) => {
                                        return (
                                            <div key={index} className="col-xl-6 col-lg-6 col-md-6 col-12  ">
                                                <div className="blog_tag">
                                                    <Link to={`/store/single-blog/${blog.id}`}>
                                                        <img src={BASE_URL + "/storage/media/" + blog.media?.name} className="img-fluid" alt="" />
                                                    </Link>
                                                    <Link to={`/store/single-blog/${blog.id}`}>
                                                        <h2 className="Blog_title">
                                                            {blog.description.slice(0, 70) + ' ...'}
                                                        </h2>
                                                    </Link>
                                                    <div className="Blog_list">
                                                        <span className="Blog_author">
                                                            <i className="fa fa-user"></i>
                                                            {blog.user.username}
                                                        </span>
                                                        <span className="Blog_Date">
                                                            <i className="fa fa-calendar "></i>
                                                            {formatDate(blog.created_at)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>


                        <BlogSidebar blogs={blogs} />


                    </div>
                </div>

            </main>

        </div>
    )
}

export default CategoryBlog