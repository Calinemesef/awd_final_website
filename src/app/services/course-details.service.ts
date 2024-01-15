import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  constructor() { }

  courseDetails = [
    {
      id:1,
      courseName: "DM",
      courseDetails: "Data Mining",
      courseCredits: 8,
      courseDescription: "\n" +
        "The Data Mining course is a dynamic and comprehensive exploration of techniques and methodologies for extracting valuable insights from vast" +
        " datasets. " +
        "Delivered by experienced faculty with expertise in both academia and industry, the course covers fundamental concepts such as data" +
        " preprocessing," +
        " pattern recognition, and predictive modeling. " +
        "Through a combination of lectures, hands-on projects, and practical exercises, students gain proficiency in using popular data mining tools and algorithms. " +
        "Real-world applications are emphasized, ensuring that students can apply their knowledge to solve complex problems in various domains." +
        " The course also addresses ethical considerations and privacy concerns related to data mining, fostering a holistic understanding of the field. " +
        "By the end of the course, students are well-prepared to analyze large datasets, uncover hidden patterns, and make informed decisions," +
        " positioning them for success in data-centric roles within the computer science landscape.",
      lectureDuration: "2 hours weekly",
      seminarDuration: "2 hours weekly",
      teamsCode: "23fgas23"

    },    {
      id:2,
      courseName: "AWD",
      courseDetails: "Adaptive Web Design",
      courseCredits: 7,
      courseDescription: "\n" +
        "The Adaptive Web Design course is an immersive exploration of creating web interfaces that seamlessly respond to" +
        " the diverse needs of users across various devices and screen sizes. Through a blend of theoretical insights and hands-on practical exercises, students delve into the principles of responsive design, progressive enhancement, and mobile-first development. The curriculum places a strong emphasis on industry-relevant tools and frameworks, ensuring that students are adept at crafting web solutions that are not only visually appealing but also highly accessible and user-friendly. With a focus on current trends and emerging technologies in web design, students graduate with the skills to develop adaptive and responsive websites, optimizing user experiences across the ever-evolving digital landscape. The course equips students with the knowledge and creativity to address the challenges posed by the diversity of devices and user contexts in contemporary web development.",
      lectureDuration: "3 hours weekly",
      seminarDuration: "3 hours weekly",
      teamsCode: "5jn3tigwr1"

    },    {
      id:3,
      courseName: "OOP",
      courseDetails: "Object Oriented Programming",
      courseCredits: 6,
      courseDescription: "The Object-Oriented Programming (OOP) course offers a comprehensive exploration of software" +
        " design principles and coding methodologies. Taught by experienced faculty members, the course introduces students to the foundational concepts of OOP, including encapsulation, inheritance, and polymorphism. Through a hands-on approach, students gain practical experience in designing and implementing object-oriented solutions to complex problems. The curriculum encompasses popular programming languages such as Java, C++, or Python, enabling students to apply OOP principles in a language-agnostic manner. Emphasis is placed on fostering a deep understanding of design patterns and best practices, ensuring that students graduate with the ability to create modular, maintainable, and scalable software solutions. The course prepares students for the demands of modern software development, equipping them with the skills needed to excel in the dynamic and collaborative world of computer programming.",
      lectureDuration: "4 hours weekly",
      seminarDuration: "2 hours weekly",
      teamsCode: "4htynig5o"
    },
  ]
}
