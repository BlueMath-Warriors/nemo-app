import Image from "next/image";
import Layout from "../layout";

const About = () => {
  return (
    <Layout>
      <section
        className="flex flex-col flex-1 gap-8 items-start pt-[180px] pb-[160px] pl-[8%] pr-[10%] md:pl-[13%] md:pr-[15%] lg:pl-[18%] lg:pr-[20%] w-full text-3xl text-nemo-blue-light text-left"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <p>Career search has always been broken.</p>
        <p>
          Despite taking up nearly half of our waking hours, most careers are
          happy accidents. In school, the path to getting ahead is clear: study
          hard, study often, and take harder and harder classes. The real world
          lacks that clarity. Previous generations found their entire careers in
          a single role.
        </p>
        <p>
          When you were in grade school, at some point your teacher asked you
          what you wanted to be when you grew up. You may have taken a paper
          quiz, matching your personality to a plausible career. When you were
          applying to college, they asked you to pick a major.
        </p>
        <p>
          In college, they asked you the same question. Maybe you picked a
          finance major with a clear career in mind; maybe you simply liked to
          study literature.
        </p>
      </section>
    </Layout>
  );
};

export default About;

//
//
//
//
