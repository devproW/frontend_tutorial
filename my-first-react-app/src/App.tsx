import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ProfileCard from "./components/ProfileCard";
import ProfileDetails from "./components/ProfileDetails";
import SearchBox from "./components/SearchBox";
import { profiles, goal1, goal2, goal3 } from "./data/profiles";

function App() {
  const name = "Firdaus";
  const title = "Frontend Developer Student";
  const description =
    "I am learning React and TypeScript so I can build modern web applications.";
  const [searchText, setSearchText] = useState("");
  const normalizedSearchText = searchText.trim().toLowerCase();
  const hasSearchText = normalizedSearchText.length > 0;
  const filteredProfiles = profiles.filter((profile) => {
    if (!hasSearchText) {
      return true;
    }

    const searchableFields = [
      profile.name,
      profile.role,
      profile.location,
      profile.favoriteTechnology,
    ];

    return searchableFields.some((field) =>
      field.toLowerCase().includes(normalizedSearchText),
    );
  });
  const hasFilteredProfiles = filteredProfiles.length > 0;

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
      <SearchBox searchText={searchText} onSearchChange={setSearchText} />
      <ProfileDetails />
      <Counter />
      <section>
        <h2>Team Profiles</h2>
        {hasFilteredProfiles
          ? filteredProfiles.map((profile) => (
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
            ))
          : hasSearchText && <p>No profiles found.</p>}
      </section>
    </div>
  );
}

export default App;
