import type { ProfileData } from "../types/profile";

const goal1 = "Build my own portfolio website";
const goal2 = "Create a full-stack application";
const goal3 = "Become a professional frontend developer";

const profiles: ProfileData[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    location: "San Francisco, CA",
    learningGoal: goal1,
    isAvailable: true,
    yearsOfExperience: 0,
    favoriteTechnology: "React",
    isRemote: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Frontend Developer",
    location: "New York, NY",
    learningGoal: goal2,
    isAvailable: false,
    yearsOfExperience: 5,
    favoriteTechnology: "Vue",
    isRemote: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Full Stack Developer",
    location: "London, UK",
    learningGoal: goal3,
    isAvailable: true,
    yearsOfExperience: 1,
    favoriteTechnology: "Angular",
    isRemote: true,
  },
  {
    id: 4,
    name: "Bob Brown",
    role: "Backend Developer",
    location: "Berlin, Germany",
    learningGoal: goal2,
    isAvailable: true,
    yearsOfExperience: 6,
    favoriteTechnology: "Angular",
    isRemote: false,
  },
];

export { profiles, goal1, goal2, goal3 };
