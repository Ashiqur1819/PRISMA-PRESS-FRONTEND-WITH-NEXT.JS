import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World
      <br />
      <Link href={"/blogs"}>Blogs</Link>
    </div>
  );
}
