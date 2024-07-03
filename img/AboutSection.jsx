



'use client'
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc">
        <li>Communication Skills</li>
        <li>Critical Thinking Skills</li>
        <li>Social Skills</li>
        <li>Emotional Intelligence</li>
        <li>Creativity</li>
        <li>Time Management and Organization</li>
        <li>Problem-Solving Skills</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc">
        <li>Play group to Xnth class.</li>
        <li>Adding extra-curricular activities.</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc">
        <li>Language Proficiency Certificates</li>
        <li>Sports Certifications</li>
        <li>Art Certifications</li>
        <li>Computer Skills Certifications</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black " id="about">
        <h2 className="text-4xl font-bold text-blue-900  mt-14 blink">About Us</h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="md:order-2  "  >
      
          <Image src="/printimage.jpeg" width={500} height={800} />
          <Image src="/banner2.jpeg" width={500} height={800} />
        </div>
        <div className="md:order-1">
        
          <p className="text-base lg:text-lg text-justify">
            Rainbow Concept School & Play School, established by SPR Memorial Educational Society in 2007, stands as a beacon of holistic education and progressive learning. From playgroup to Class X, the institution offers a unique blend of CBSE and ICSE integrated curriculum, ensuring a comprehensive educational experience for its students.

            What sets Rainbow Concept School apart is its unwavering commitment to nurturing not just academic excellence but also fostering all-round development. By integrating NEET Medical and JEE IIT foundation programs into its curriculum, the school paves the way for students to excel in competitive exams, opening doors to prestigious institutions and future careers in science and medicine. <br/>

            Aligned with the National Education Policy (NEP) 2020, Rainbow Concept School is at the forefront of educational innovation, constantly evolving to meet the demands of the 21st century. Emphasizing the development of critical thinking, creativity, communication, collaboration, and other essential skills, the school ensures that students are well-equipped to thrive in a rapidly changing world. <br/>

            Under the umbrella of SPR Memorial Educational Society, Rainbow Concept School & Play School has become synonymous with excellence, providing a nurturing environment where every child is encouraged to explore their potential and achieve their dreams. With a dedicated faculty, state-of-the-art facilities, and a student-centered approach, Rainbow Concept School continues to inspire and empower generations of learners to reach for the stars and make their mark on the world. 
          </p>
          <div className="flex flex-row justify-start mt-8 " >
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
