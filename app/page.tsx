const HomePage = () => {
  return (
    <section
      aria-labelledby="intro-heading"
      className="flex min-h-[calc(100dvh-80px)] flex-col items-center justify-center px-6 py-12 text-center md:px-12"
    >
      <h1
        id="intro-heading"
        className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
      >
        Hi, I&apos;m a Software Engineer
      </h1>

      <p className="mt-4 text-xl font-medium text-blue-600 md:text-2xl lg:text-3xl">
        Front-End Developer
      </p>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:mt-8 md:text-xl lg:text-2xl">
        I&apos;m passionate about turning ideas into meaningful digital
        experiences that make a difference. I enjoy solving complex problems and
        creating intuitive, engaging applications that people love to use.
      </p>
    </section>
  );
};

export default HomePage;
