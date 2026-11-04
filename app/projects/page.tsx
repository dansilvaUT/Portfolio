import { JSX } from "react";

const Page = (): JSX.Element => {
  return (
    <section className="size-full flex flex-col items-center justify-center text-white p-6 space-y-6">
      <h1 className="text-5xl font-bold align-middle">Projects</h1>
      <p className="text-lg text-gray-200 text-xl">
        Here are some of my projects. Coming soon!
      </p>
    </section>
  );
};

export default Page;
