import "./App.css";
import Profile from "./components/Profile";
import ProfileCard from "./components/ProfileCard";

function App() {
  const name = "Firdaus";
  const title = "Frontend Developer Student";
  const description = "I am learning React and TypeScript so I can build modern web applications.";
  const goal1 = "Build my own portfolio website";
  const goal2 = "Create a full-stack application";
  const goal3 = "Become a professional frontend developer";

  const profiles = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      location: "San Francisco, CA",
      learningGoal: goal1,
      isAvailable: true,
      yearsOfExperience: 0,
      favoriteTechnology: "React"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Frontend Developer",
      location: "New York, NY",
      learningGoal: goal2,
      isAvailable: false,
      yearsOfExperience: 5,
      favoriteTechnology: "Vue"
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Full Stack Developer",
      location: "London, UK",
      learningGoal: goal3,
      isAvailable: true,
      yearsOfExperience: 1,
      favoriteTechnology: "Angular"
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
          />
        ))}
      </section>
    </div>
  );
}

export default App;