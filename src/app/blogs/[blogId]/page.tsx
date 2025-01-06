import BlogDetails from "@/components/ui/BlogDetails";
import { BlogId, BlogPost } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "force-cache",
  });
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: BlogPost) => ({
    blogId: blog.id,
  }));
};

const page = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div className="my-10">
      <BlogDetails blog={blog}></BlogDetails>
    </div>
  );
};

export default page;
