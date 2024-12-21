import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="w-full h-screen bg-[url('/images/bg.jpg')] bg-no-repeat bg-cover">
    <h1 className="text-6xl text-white text-center px-30 py-10">Welcome To My Site</h1>
      <div className="w-full flex justify-around items-center">
        <Link
          href="/serverside"
          className="w-40 h-16 flex items-center justify-center bg-blue-600 
text-white"
        >
          <button>Server Side</button>
        </Link>
        <Link
          href="/clientside"
          className="w-40 h-16 flex items-center justify-center bg-blue-600 
text-white"
        >
          <button>Client Side</button>
        </Link>
      </div>
      </div>
    </>
  );
}
