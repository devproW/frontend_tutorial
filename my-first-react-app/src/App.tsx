import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ProfileCard from "./components/ProfileCard";
import ProfileDetails from "./components/ProfileDetails";
import SearchBox from "./components/SearchBox";
import { profiles, goal1, goal2, goal3 } from "./data/profiles";
import ProfileFilter from "./components/ProfileFilter";

function App() {
  const name = "Firdaus";
  const title = "Frontend Developer Student";
  const description =
    "I am learning React and TypeScript so I can build modern web applications.";
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const normalizedSearchText = searchText.trim().toLowerCase();
  const hasSearchText = normalizedSearchText.length > 0;
  const filteredProfiles = profiles.filter((profile) => {
    let matchesSearch = false;

    const searchableFields = [
      profile.name,
      profile.role,
      profile.location,
      profile.favoriteTechnology,
    ];

    matchesSearch = searchableFields.some((field) =>
      field.toLowerCase().includes(normalizedSearchText),
    );

    if (!hasSearchText) {
      matchesSearch = true;
    }

    let matchesFilter = false;

    if (selectedFilter === "all") {
      matchesFilter = true;
    }
    if (selectedFilter === "available") {
      matchesFilter = profile.isAvailable;
    }
    if (selectedFilter === "remote") {
      matchesFilter = profile.isRemote;
    }
    if (selectedFilter === "onsite") {
      matchesFilter = !profile.isRemote;
    }
    if (selectedFilter === "react") {
      matchesFilter = profile.favoriteTechnology.toLowerCase() === "react";
    }
    if (selectedFilter === "angular") {
      matchesFilter = profile.favoriteTechnology.toLowerCase() === "angular";
    }
    if (selectedFilter === "vue") {
      matchesFilter = profile.favoriteTechnology.toLowerCase() === "vue";
    }
    return matchesSearch && matchesFilter;
  });
  const hasFilteredProfiles = filteredProfiles.length > 0;
  const profileLabel = filteredProfiles.length === 1 ? "profile" : "profiles";
  const profileCount =
    filteredProfiles.length > 0
      ? `Showing ${filteredProfiles.length} ${profileLabel}`
      : "No profiles found";
  const handleClearFilters = () => {
    setSelectedFilter("all");
    setSearchText("");
  };
  const hasActiveFilter = selectedFilter !== "all" || hasSearchText;

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
      <ProfileFilter
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      {hasActiveFilter && (
        <button onClick={handleClearFilters}>Clear Filters</button>
      )}
      <ProfileDetails />
      <Counter />
      <section>
        <h2>Team Profiles</h2>
        <p>{profileCount}</p>
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
          : null}
      </section>
    </div>
  );
}

export default App;
