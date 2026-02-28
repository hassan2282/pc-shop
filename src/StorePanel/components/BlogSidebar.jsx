import React from 'react'

function BlogSidebar({blogs}) {
    return (
        <div className="col-12 col-lg-3">

            <div className="sidebar_blog">
                <div className="widget_blog">
                    <div className="widget_blog_headbox">
                        <h3> دسته بندی ها </h3>
                    </div>
                    <div className="blog_list_widget_blog">
                        <div className="widget_blog_groups">
                            <ul className="widget_blog_posts">
                                {
                                    blogs &&
                                    blogs.map((item, index) => {
                                        return (

                                            <li key={index}><a className="" href=""> {item.category.name} </a></li>

                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="widget_blog marg_top20">
                    <div className="widget_blog_headbox">
                        <h3>آخرین مقالات </h3>
                    </div>
                    <div className="blog_list_widget_blog">
                        <div className="widget_blog_groups">
                            <ul className="widget_blog_posts">
                                {
                                    blogs &&
                                    blogs.map((item, index) => {
                                        return (
                                            <li key={index}><a className="widget_blog_title_link" href="">{item.description.slice(0, 70) + ' ...'}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogSidebar