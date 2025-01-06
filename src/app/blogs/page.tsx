import BlogCard from "@/components/ui/BlogCard";
import { BlogPost } from "@/types";
import React from "react";

const blogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <div className="w-[90%] mx-auto items-center">
      <h1 className="text-center text-4xl my-5">
        All Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center w-2/4 mx-auto py-4">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs.map((blog: BlogPost) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default blogsPage;
