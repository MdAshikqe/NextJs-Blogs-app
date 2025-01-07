import LoadingCard from "@/components/ui/LoadingCard";
import { BlogPost } from "@/types";
import React from "react";

const LoadingPageCard = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div className="grid grid-cols-3 gap-4">
      {blogs.map((blog: BlogPost) => (
        <LoadingCard key={blog.id}></LoadingCard>
      ))}
    </div>
  );
};

export default LoadingPageCard;
