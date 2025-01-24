import getAllPost from "@/myapi/getAllPost";
import Link from "next/link";
export default async function Home() {
  const blogs = await getAllPost();
  console.log(blogs)
  return (
   <main>
    <h1>All blogs:</h1>
    <ul className="my-8">
      {blogs.map(blog =><li key={blog.id}>
       <div className="flex space-x-2 border-2 rounded py-6 px-4 my-3">
        <p>{blog.id}</p>
       <Link  href={`/blog/${blog.id}`}>
        <p>{blog.title}</p>
        </Link>
       </div>
      </li>)}
    </ul>
   </main>
  );
}
