import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import apiClient from "../../apiClient";
import { toast } from "react-toastify";
import BlogSidebar from "./BlogSidebar";

function SingleBlog() {

    const BASE_URL = import.meta.env.VITE__BASEURL;
    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [blogWithRels, setBlogWithRels] = useState();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await apiClient.get(`/singleBlog/${id}`);
                if (res.status >= 200 && res.status < 300) {
                    setBlog(res.data[0]);
                    setBlogWithRels(res.data[1]);
                }

            } catch (err) {
                toast.error('خطا در واکشی مقاله');
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
            <main className="wrapper default ">
                <div className="container">
                    <div className="row">
                        <div className="single_blog_content col-12 col-lg-9 mx-auto order-1 order-sm-1 ">
                            <header className="card-header">
                                <h3 className="card-title"><span> {blog && blog.title} </span></h3>
                            </header>
                            <div className="single_blog_page">

                                <div className="single_blog_box_content">
                                    <form className="form-account">
                                        <div className="row">

                                            <div className="col-md-12 col-sm-12">

                                                <img src={blog && BASE_URL + "/storage/media/" + blog.media?.name} />
                                                <div className="data_det flex flex-row justify-center items-center">
                                                    <span className="publish_date">
                                                        <i className="fa fa-clock"></i>
                                                        {
                                                          blog && formatDate(blog.created_at)
                                                        }
                                                    </span>
                                                    <span className="author">
                                                        <i className="fa fa-user-alt"></i>
                                                        <span> {blog &&  blog.user.username} </span>
                                                    </span>
                                                    <span className="categoey">
                                                        <i className="fa fa-folder"></i>
                                                        <a href="category-blog.html" rel="category tag">{blog && blog.category?.name}</a>
                                                    </span>
                                                    <span className="visitors">
                                                        <i className="fa fa-eye"></i> {blog && Math.floor(Math.random() * 10000)}
                                                    </span>
                                                </div>

                                                <div dangerouslySetInnerHTML={{ __html: blog?.text }}></div>

                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                        <BlogSidebar blogs={blogWithRels} />

                    </div>
                </div>
            </main>


        </div>
    )
}

export default SingleBlog