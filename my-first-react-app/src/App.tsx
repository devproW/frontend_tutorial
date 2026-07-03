import "./App.css";
import Profile from "./components/Profile";
import ProfileCard from "./components/ProfileCard";
import { profiles, goal1, goal2, goal3 } from "./data/profiles";

function App() {
  const name = "Firdaus";
  const title = "Frontend Developer Student";
  const description =
    "I am learning React and TypeScript so I can build modern web applications.";

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
