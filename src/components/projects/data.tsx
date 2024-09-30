import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "GitHub Repository Rating App for iOS and Android",
    projectUrls: {
      repo: {
        owner: "kpcullen",
        name: "rate-repository-app",
        showStarCount: false,
      },
    },
    imageUrl: "/images/rate-repo-app.png",
    description: `The frontend logic and UI for searching and rating GitHub repositories.`,
    tech: [
      "React Native",
      "React Native Paper",
      "GraphQL",
      "Apollo Client",
      "Expo Go",
    ],
    cards: {
      a: {
        title: "Create a personal library of GitHub repositories",
        text: `Built with React Native, React Native Paper and GraphQL, this app allows user to search GitHub repositories, rate them, and store for later use. It includes log in and authentication, as well as advanced sorting features.`,
      },
      b: {
        title: "Built with the latest mobile technologies",
        text: `Developed with Expo Go and xCode. Works with both iOS and Android.`,
      },
    },
  },
  {
    title: "BlogApp",
    projectUrls: {
      site: {
        url: "https://blog-app-rjha.onrender.com",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        name: "blog-app",
        owner: "kpcullen",
        showStarCount: false,
      },
    },
    imageUrl: "/images/blog-app.png",
    description: `An app for friends to aggregate, share, rate and comment on blogs. Include sign up and login authentication.`,
    tech: [
      "JavaScript",
      "React",
      "React Query",
      "React Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    cards: {
      a: {
        title: "Implements global state management",
        text: `This app implements React Query to handle global UI, user and database state mangement. Error handling (as well as success messaging) is gracefully acheived by displaying a warning notification in the UI. JWT and bcrypt are implemented to handle authentication.`,
      },
      b: {
        title: "Node.js backend works with MongoDB",
        text: `Backend built in Node.js with Express and Mongoose validators and schmemas. Data is persisted to MongoDB. Currently building another backend that works with PostgreSQL databases`,
      },
    },
  },
  {
    title: "The Wild Oasis - Guest Website",
    projectUrls: {
      site: {
        url: "https://the-wild-oasis-website-lemon.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        name: "the-wild-oasis-website",
        owner: "kpcullen",
        showStarCount: false,
      },
    },
    imageUrl: "/images/the-wild-oasis-website.png",
    description: `A booking and account management app for a fictional hotel`,
    tech: ["Next.js", "TailwindCSS", "Google Authentication", "Supabase"],
    cards: {
      a: {
        title: "React server components",
        text: `Built with Next.js, this website acts as a model for a hotel booking app. Guests can peruse rooms based on size and availability, and making bookings accordingly. Server rendered components enhance SEO performance and searchability. Google Authentication is used to manager the guest's profile and bookings.`,
      },
      b: {
        title: "Deployed with Vercel, styled with TailwindCSS",
        text: `The website serves as the guest portal for the management app below.`,
      },
    },
  },
  {
    title: "The Wild Oasis - Hotel Management App",
    projectUrls: {
      site: {
        url: "https://the-wild-oasis-kevin-cullen.netlify.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        name: "the-wild-oasis",
        owner: "kpcullen",
        showStarCount: false,
      },
    },
    imageUrl: "/images/the-wild-oasis-management.png",
    description: `A user-friendly hotel management app with a fully functional dashboard`,
    tech: ["React", "React Query", "Styled Components", "Supabase"],
    cards: {
      a: {
        title:
          "A sleek, modern hotel management system with a user-friendly experience",
        text: `The management side of the previous app. Allows hotel workers to manage books, rooms, customers and special requests with ease. Style with CSS-in-JS (Styled Components) while global state is managed with React Query. Log in with email: "test@test.com and password: "testtest".`,
      },
      b: {
        title: "Utilising the latest graph-building technologies",
        text: `A fully customised dashboard allows the user to measure performance, statistics, trends, and upcoming events.`,
      },
    },
  },
  {
    title: "Patientor - Patient Management Prototype",
    projectUrls: {
      site: {
        url: "https://patientor-kur7.onrender.com/",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        name: "patientor",
        owner: "kpcullen",
        showStarCount: false,
      },
    },
    imageUrl: "/images/patientor.png",
    description: `A TypeScript based management system for patients, hospital visits and diagnoses`,
    tech: ["TypeScript", "React", "MUI"],
    cards: {
      a: {
        title: "Enhanced type enforcement",
        text: `Deploys TypeScript to control types for entering information and displaying information. Type enforcement also allows for the safe transmission of data, preventing sensitive information from being received.`,
      },
      b: {
        title: "Type checking controls the UI",
        text: `The UI is rendered in accordance with the pre-defined type that is being worked with.`,
      },
    },
  },
];
