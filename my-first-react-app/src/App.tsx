import "./App.css";
import Profile from "./components/Profile";
import ProfileCard from "./components/ProfileCard";

function App() {
  const name = "Firdaus";
  const name1 = "John Doe";
  const name2 = "Jane Smith";
  const name3 = "Alice Johnson";
  const location = "Your Location";
  const location1 = "New York, USA";
  const location2 = "London, UK";
  const title = "Frontend Developer Student";
  const title1 = "Software Engineer";
  const title2 = "UI/UX Designer";
  const title3 = "Full Stack Developer";
  const description = "I am learning React and TypeScript so I can build modern web applications.";
  const goal1 = "Build my own portfolio website";
  const goal2 = "Create a full-stack application";
  const goal3 = "Become a professional frontend developer";

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
      <ProfileCard
        name={name1}
        role={title1}
        location={location}
        learningGoal={goal1}
        isAvailable={true}
        yearsOfExperience={0}
      />
      <ProfileCard
        name={name2}
        role={title2}
        location={location1}
        learningGoal={goal2}
        isAvailable={false}
        yearsOfExperience={5}
          
      />
      <ProfileCard
        name={name3}
        role={title3}
        location={location2}
        learningGoal={goal3}
        isAvailable={true}
        yearsOfExperience={1}
      />
    </div>
  );
}

export default App;