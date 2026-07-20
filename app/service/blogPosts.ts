import { cacheLife } from "next/cache";

const blogPosts = async() => {
    "use cache"
      cacheLife("hours")


  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json()
};

export default blogPosts;
