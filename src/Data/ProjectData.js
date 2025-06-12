import flashcardImg from "../public/images/flashcard.png"
import doctorProImg from "../public/images/doctorBooking.png"
import chatproImg from "../public/images/chatPro.png";


export const Projects = [
  {
    id: 1,
    image: flashcardImg,
    title: "Flashcard learning Tool",
    description: [
      "An interactive flashcard learning platform supporting both multiple-choice and objective questions.",
      "app includes complete admin control to add, update, or delete questoin cards, and enables efficient content management.",
      "The main motive is to give enhanced learning experience with smooth user interaction and a clean, responsive UI for learners",
    ],
    techStack: "NodeJS, ExpressJs, ReactJs, MongoDB",
    liveLink: "https://flash-card-learning-tool-wvhm.vercel.app",
    repoLink: "https://github.com/Harsh-Agrawal96/Flash-Card-Learning-Tool",
  },
  {
    id: 2,
    image: doctorProImg,
    title: "Doctor Appointment Booking System",
    description: [
      "A complete appointment booking system enabling patients to schedule booking with doctors and clinics, and features like booking approvals, cancellations, and detailed user profiles.",
      "It has secure, role-based login and session handling to manage access for patients, doctors, and clinic admins.",
      "It helps in reducing manual errors during process across the system.",
    ],
    techStack: "ExpressJs, HTML, CSS, Ejs, MongoDB, PassportJS",
    liveLink: "https://doctor-appointment-booking-system-owfh.onrender.com",
    repoLink: "https://github.com/Harsh-Agrawal96/doctor-Appointment-Booking-System",
  },
  {
    id: 3,
    image: chatproImg,
    title: "ChatPro Chat App",
    description: [
      "A feature-rich chat application with real-time one-on-one and group messaging using WebSockets.",
      "ChatPro includes core functionalities such as user authentication, live message updates, and group creation.",
      "It support seamless communication for multiple concurrent users with a responsive UI.",
    ],
    techStack: "ExpressJs, ReactJs, Redux, MongoDB, Socket.IO",
    liveLink: "https://chatpro-rosy.vercel.app",
    repoLink: "https://github.com/Harsh-Agrawal96/ChatPro-Frontend",
  },
];