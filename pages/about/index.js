import Image from "next/image";
import Layout from "../layout";

const About = () => {
  return (
    <Layout>
      <section
        className="flex flex-col flex-1 gap-8 items-start pt-[160px] pb-[160px] pl-[8%] pr-[10%] md:pl-[13%] md:pr-[15%] lg:pl-[18%] lg:pr-[20%] w-full text-3xl text-nemo-blue-light text-left"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <p>Career search has always been broken.</p>
        <p>
          Despite taking up nearly half of our waking hours, most careers are
          happy accidents. In school, the path to getting ahead is clear: study
          hard, study often, and take harder and harder classes. The real world
          lacks that clarity. Previous generations found their entire careers in
          a single company: the way forward was simply climbing the ladder.
          That’s no longer the route to success: millennials switch jobs every
          18 months in their 20s; Gen Z is on a similar path. Data about careers
          is fragmented and hidden. Salary info is impossible to find, benefits
          are gated to applicants until they get through the process, and career
          progressions are nebulous at best.
        </p>
        <p>
          It doesn’t have to be that way. No two careers may repeat, but many
          rhyme. At Nemo, we are taking a data-driven approach to charting
          careers - helping you figure out how to get where you want to go. We
          began in Silicon Valley, charting the careers of hundreds of top
          professionals to demystify what it takes to get to the top. We’ve
          created a dynamic job board that shows roles suited to your tastes; an
          AI career coach to help you navigate the steps between you and that
          next opportunity; and a robust set of guides for every profession you
          can think of.
        </p>
        <p>Knowledge is power. Take back yours.</p>
      </section>
    </Layout>
  );
};

export default About;

//
//
//
//
