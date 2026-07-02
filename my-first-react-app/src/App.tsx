import "./App.css";
import Profile from "./components/Profile";
import ProfileCard from "./components/ProfileCard";

type Profile = {
  id: number;
  name: string;
  role: string;
  location: string;
  learningGoal: string;
  isAvailable: boolean;
  yearsOfExperience: number;
  favoriteTechnology: string;
  isRemote: boolean;
};

function App() {
  const name = "Firdaus";
  const title = "Frontend Developer Student";
  const description = "I am learning React and TypeScript so I can build modern web applications.";
  const goal1 = "Build my own portfolio website";
  const goal2 = "Create a full-stack application";
  const goal3 = "Become a professional frontend developer";

  const profiles: Profile[] = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      location: "San Francisco, CA",
      learningGoal: goal1,
      isAvailable: true,
      yearsOfExperience: 0,
      favoriteTechnology: "React",
      isRemote: true
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
      isRemote: false
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
      isRemote: true
    }
  ];

  return (
    <div className="app">
      <Profile
        name={name}
        title={title}
        description={description}
        goal1={goal1}
        goal2={goal2}
        goal3={goal3}
      />
      <section>
        <h2>Team Profiles</h2>
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            location={profile.location}
            learningGoal={profile.learningGoal}
            isAvailable={profile.isAvailable}
            yearsOfExperience={profile.yearsOfExperience}
            favoriteTechnology={profile.favoriteTechnology}
            isRemote={profile.isRemote}
          />
        ))}
      </section>
    </div>
  );
}

export default App;