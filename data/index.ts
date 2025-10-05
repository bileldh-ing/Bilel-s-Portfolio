export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Netflix-inspired Movie Platform (Django, SQL)",
    des: "CRUD operations on movies, genre-based filtering, user reviews, average ratings, and favorites management.",
    img: "/movies.png",
    iconLists: [
      "https://www.svgrepo.com/show/373554/django.svg",
      "https://www.svgrepo.com/show/452091/python.svg",
      "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
    ],
    link: "https://github.com/bileldh-ing/djangoo.git",
  },
  {
    id: 2,
    title: "PFE Management Platform (Spring Boot & Next.js)",
    des: "Manage presentation scheduling at ISSAT SOUSSE: Excel import, jury assignment, teacher availability, filtering, chatbot, and rules.",
    img: "/pfe.png",
    iconLists: [
      "/next.svg",
      "/spring.png",
      "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
      "/jwt.png",
    ],
    link: "https://www.linkedin.com/posts/bilel-dhahri-a6a0b6255_nextjs-springboot-microservices-activity-7351719177264472064-AEkH",
  },
  {
    id: 3,
    title: "Design Services Platform (React + Firebase)",
    des: "Microservices: background removal, AI image search, grid-to-code, mockups, palette suggestions, chatbot, and simulated payments.",
    img: "/assethub.png",
    iconLists: [
      "/re.svg",
      "https://www.svgrepo.com/show/373595/firebase.svg",
      "/spring.png",
    ],
    link: "https://www.linkedin.com/posts/bilel-dhahri-a6a0b6255_reactnative-firebase-fullstackdevelopment-activity-7351715587821060097-Cs-N",
  },
  {
    id: 4,
    title: "Car Appointments Mobile App (Java + Firebase)",
    des: "User authentication and map services for agency selection, among other features.",
    img: "/car.png",
    iconLists: [
      "/android.svg",
      "https://www.svgrepo.com/show/373595/firebase.svg",
    ],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Hi @bilel, thank you so much ❤️ You're always an amazing and creative team member at MAPS IT.",
    name: "Amine Omrani",
    title: "Colleague at MAPS IT",
    img: "/amine.jpeg",
  },
  {
    quote:
      "Dhahri Bilel is absolutely brilliant! His passion for what he does is truly inspiring.",
    name: "Student",
    title: "Student",
    img: "/avatar.png",
  },
  {
    quote:
      "Bilel’s dedication and skill are unmatched. He’s brilliant and a pleasure to work with.",
    name: "Client",
    title: "Client",
    img: "/profile.png",
  },
  {
    quote:
      "Working with Bilel during Tech4Health projects was amazing — his leadership and creativity inspired the whole team.",
    name: "Club Member",
    title: "Teammate at Tech4Health Robotics Club",
    img: "/avatar.png",
  },
  {
    quote:
      "Bilel’s innovation mindset shines in every project. His HANK robot project was one of the most impressive student works I’ve seen.",
    name: "Mentor",
    title: "Academic Supervisor",
    img: "/profile.png",
  },
  {
    quote:
      "Bilel stood out for his innovation and technical mastery during our event — his contributions were top-notch.",
    name: "Hackathon Organizer",
    title: "Event Organizer",
    img: "/avatar.png",
  },
  {
    quote:
      "Bilel brings professionalism, passion, and solid technical know-how. He’s the kind of person who elevates the whole project.",
    name: "Team Lead",
    title: "Lead at Elife Tech Center",
    img: "/profile.png",
  },
];

export const companies = [
  {
    id: 1,

    img: "/logo1.svg"
  
  },
  {
    id: 2,
   
    img: "/appaxis.svg",

  },
  {
    id: 3,

    img: "/elife.svg",

  },
  {
    id: 4,
   
    img: "/caissa.svg",
  
  },
  {
    id: 5,
   
    img: "/dark.png",
   
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Tech4Health Robotics Club — July & August 2025",
    desc: "Supervised 25 students in robotics, IoT, and AI projects, including: a vision-controlled robotic hand, a voice-to-text smartwatch, an emotion-responsive robot, and AI-powered smart glasses for the visually impaired.",
    className: "md:col-span-2",
    thumbnail: "/robotics.png",
  },
  {
    id: 2,
    title: "Internship | Appaxis Innovations — July & August 2024",
    desc: "Collaborated on a recipe app using Kotlin, Node.js, and MongoDB. Key features include JWT-based authentication, detailed recipe browsing, recipes search, user submissions, and profile management with favorited recipes.",
    className: "md:col-span-2",
    thumbnail: "/2.png",
  },
  {
    id: 3,
    title: "Internship | MAPS IT — July & August 2024",
    desc: "During my internship as a Graphic Designer, I crafted cohesive and impactful visuals using Photoshop, After Effects, and Premiere Pro.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/1.png",
  },
  {
    id: 4,
    title: "Graduation’s Internship | Elife Tech Center — Feb - June 2023",
    desc: "Developed HANK, a humanoid robot nurse assistant, and a smartwatch. HANK uses IoT and AI (facial recognition, QR scanning for medication instructions, vital monitoring, GPS tracking) powered by Raspberry Pi 4 with motors, sensors, and a touchscreen. The smartwatch (Raspberry Pi Pico W) includes heart rate and body temperature sensors. Both housings were 3D printed.",
    className: "md:col-span-2",
    thumbnail: "/3.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
