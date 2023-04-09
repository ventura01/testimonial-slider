"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });
type Testimonial = {
  text: string;
  name: string;
  jobTitle: string;
  image: string;
};
const testimonials: Testimonial[] = [
  {
    name: "Tanya Sinclair",
    text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    jobTitle: "UX Engineer",
    image: "/images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    jobTitle: "Junior Front-end Developer",
    image: "/images/image-john.jpg",
  },
];
type Props = {};

const Slider = (props: Props) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      return setIndex(testimonials.length - 1);
    }
    setIndex(index - 1);
  };
  const handleNext = () => {
    if (index === testimonials.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };
  return (
    <div className="relative grid grid-cols-1 grid-rows-2 md:mx-auto md:h-[800px] md:w-[1440px] md:grid-cols-2 md:grid-rows-1 md:bg-slate-50">
      <Image
        src="/images/pattern-curve.svg"
        alt="img"
        width={900}
        height={900}
        className="absolute bottom-0 md:bottom-0"
      />
      <div
        className={`${inter.className} relative z-50 px-10 py-10 md:my-auto md:px-0 md:py-0 md:pl-44 md:pr-0`}
      >
        <Image
          src="/images/pattern-quotes.svg"
          alt="img"
          width={120}
          height={120}
          className="absolute left-36 top-10 h-16 w-20 object-center md:-top-20 md:left-64 md:h-auto md:w-auto md:object-cover"
        />
        <div className="row-start-2 row-end-3 pt-10 md:pt-0">
          <p className="mb-6 text-center text-xl font-light text-darkBlue md:text-left ">
            {testimonials[index].text}
          </p>
          <div className="flex flex-col items-center md:block">
            <span className="mr-2 text-sm font-bold text-darkBlue md:text-left">
              {testimonials[index].name}
            </span>
            <span className="text-sm font-light text-grayishBlue">
              {testimonials[index].jobTitle}
            </span>
          </div>
        </div>
      </div>
      <div className="relative row-start-1 row-end-2 h-full w-full overflow-hidden md:col-start-2 md:col-end-3 md:overflow-visible">
        <Image
          src={testimonials[index].image}
          alt="img"
          width={550}
          height={550}
          className="absolute left-12 top-12 z-30 h-72 w-72 object-cover object-center drop-shadow-xl md:-left-16 md:top-24 md:h-auto md:w-auto"
        />
        <Image
          src="/images/pattern-bg.svg"
          alt="img"
          width={900}
          height={900}
          className="absolute top-5 object-cover object-bottom md:right-28 md:top-10"
        />
        <div className="relative left-[140px] top-[320px] h-full w-full md:left-0 md:top-0">
          <div className="absolute z-[60] flex gap-x-5 rounded-full bg-white px-4 py-2 drop-shadow-lg md:bottom-[140px]">
            <button>
              <ChevronLeftIcon
                onClick={handlePrev}
                className="block h-4 w-4 text-darkBlue transition delay-150 ease-in-out hover:-translate-x-1"
              />
            </button>
            <button>
              <ChevronRightIcon
                onClick={handleNext}
                className="block h-4 w-4 text-darkBlue transition delay-150 ease-in-out hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
