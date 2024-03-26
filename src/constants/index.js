import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Competitive Programmer",
      icon: web,
    },
    {
      title: "Photographer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Painter and Guitarist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Coffee Lover",
      company_name: "any_random_coffee_brand",
      icon: starbucks,
      iconBg: "#383E56",
      date: "November 2020 - Present",
      points: [
        "Maintaining the taste for coffee for years",
        "Experimenting with coffee to enhance flavour by 42%",
      ],
    },
    {
      title: "Car viewer",
      company_name: "cars",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Feb 2024",
      points: [
        "Experineced in viewing cool cars in showrooms and leaving without actually buying it.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta-upcoming_sde( maybe ;)  )",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Future - Further_Future",
      points: [
        "The company might go under if I join :)",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "ya ya he is a good guy                                                                        PS:just believe me",
      name: "A friend",
      designation: "CEO",
      company: "oh_ceo_company",
      image: "https://th.bing.com/th/id/OIP.9Gmd97xxfJ-JltpIv-x4eQHaHz?w=173&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      testimonial:
        "I can confirm this guy to be from planet Earth.",
      name: "Yet another friend",
      designation: "CEO",
      company: "oh_ceo_corp",
      image: "https://th.bing.com/th/id/OIP.NGlTrdvwjAZfFOG0v6IpiwAAAA?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      testimonial:
        "I doubt him to be an earthling",
      name: "Friend of a friend",
      designation: "CEO",
      company: "oh_ceo_headquarters",
      image: "https://th.bing.com/th/id/OIP.pE9x3KupNesbCIP6f-EpTwHaF3?w=238&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];
  
  const projects = [
    {
      name: "Twitter Clone - 'A'-Edition",
      description:
        "A clone NOT done the traditional way.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/aritra-sarkar-42/twitter_clone_my_version",
    },
    {
      name: "Basic Portfolio Website",
      description:
        "One who is good at 3D might not be as good in 2D? There you go.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/aritra-sarkar-42/portfolio",
    },
    {
      name: "Minimalistic To-do List",
      description:
        "Just a minimalistic To-do List, nothing extra.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/aritra-sarkar-42/todo-list-using-react/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };