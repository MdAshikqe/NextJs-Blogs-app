import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import Link from "next/link";
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 15,
    },
  });
  const blogs = await res.json();
  return (
    <>
      <LatestBlogs blogs={blogs}></LatestBlogs>
      <div className="flex justify-center py-4">
        <Link href="/blogs">
          <button className="btn btn-outline">See more blogs</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
