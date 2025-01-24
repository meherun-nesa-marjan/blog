export default async function getAllPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json();
    
  }