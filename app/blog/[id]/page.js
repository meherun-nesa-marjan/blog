import getPost from "@/myapi/getPost";
export default async function blog({params}) {
    const {id} = params;
     const blog = await getPost(id);
 return (
    <main className="my-10 p-8 border-2 rounded">
      <p>Blog: {blog.id}</p>
      <p>Blog Title: {blog.title}</p>
      <p>Blog Body: {blog.body}</p>

    </main>
 );
}