import { getMe } from "@/service/getMe";

const Home = async() => {

  const user = await getMe()
  console.log(user)

  return (
    <h1 className="text-4xl font-bold text-red-500">
      Hello World
    </h1>
  );
}

export default Home
