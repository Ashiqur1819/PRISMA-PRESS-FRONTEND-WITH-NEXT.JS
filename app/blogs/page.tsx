import blogPosts from "../service/blogPosts"

const posts = await blogPosts()
console.log(posts)

const page = async() => {
  return (
    <div>
      
    </div>
  )
}

export default page
