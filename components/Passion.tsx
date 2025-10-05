"use client";

import BlurText from "./ui/BlurText";

const Passion = () => {
  return (
    <section id="passion" className="py-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-4">
        <div className="flex flex-col items-center">
          <BlurText
            text="I possess a profound enthusiasm for software development, robotics, and design,"
            delay={110}
            animateBy="words"
            direction="top"
            className="font-bold text-2xl md:text-4xl text-center max-w-4xl"
            spanClassName="text-white"
            lastSpanClassName="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
          />
          <BlurText
            text="and have consistently pursued opportunities to enhance my coding skill set."
            delay={110}
            animateBy="words"
            direction="top"
            className="font-bold text-2xl md:text-4xl text-center max-w-4xl mt-2"
            spanClassName="text-white"
            lastSpanClassName="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
          />
        </div>

        <div className="mt-10 w-full flex justify-center">
          <img
            src="/frame.png"
            alt="passion-frame"
            className="w-full max-w-3xl pt-6 md:pt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Passion;
