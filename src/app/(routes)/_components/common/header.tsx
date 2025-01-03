import Link from "next/link";

export const MainHeader = () => {
  return (
    <header className="bg-white shadow py-4">
      <section className="container mx-auto flex justify-between items-center">
        <h1 className="text-black font-bold text-4xl">NextJS</h1>
        <ul className="flex items-center gap-6">
          <li className="text-black hover:text-blue-500 transition duration-300 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="text-black hover:text-blue-500 transition duration-300 ease-in-out">
            <Link href="/about">About</Link>
          </li>
          <li className="text-black hover:text-blue-500 transition duration-300 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </section>
    </header>
  );
};
