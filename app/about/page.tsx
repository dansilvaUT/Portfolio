import { JSX, useId } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Skills from "../components/Skills";

const Page = (): JSX.Element => {
  return (
    <section className="size-full flex flex-col items-center justify-center text-white p-6 space-y-6">
      <Avatar className="w-40 h-40 border-2 border-white">
        <AvatarImage
          src={`https://robohash.org/${useId()}`}
          alt="Dan Silva Photo"
          className="grayscale"
        />
        <AvatarFallback>DS</AvatarFallback>
      </Avatar>
      <section className="flex flex-col items-center justify-center space-y-4 md:p-8">
        <h1 className="text-5xl font-bold align-middle">Dan Silva</h1>
        <p className="text-lg text-gray-200 text-xl">
          I&apos;ve been building software for just over 5 years. One of the the
          main reasons I enjoy software development is being able to bring an
          idea, complex, fun, intriging or whatever it may be to life through
          code! When I create software, I aim to craft experiences that are both
          functional and delightful for users. I an A.A.S in Computer Science as
          well as a bachelor&apos;s degree in software development from BYU
          Idaho.
        </p>
        <p className="text-lg text-gray-200 text-xl">
          My main focus is front-end development however, I also have experience
          with back-end technologies and enjoy working on full-stack projects
          when the opportunity arises. I love challenges and I love learning,
          building my skills and knowledge with every project I take on. If you
          are looking for a dedicated and passionate developer to bring your
          ideas to life, I would be thrilled to collaborate and contribute to
          your project.
        </p>
        <p className="text-lg text-gray-200 text-xl">
          In my free time you can catch me spending time with my amazing family
          outside hiking, fishing, camping or running if the weather permits. I
          also enjoy eating out and trying new cuisines. I love watching
          building things with my physical tools as well.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-bold">Technologies</h2>
        <Skills />
      </section>
    </section>
  );
};

export default Page;
