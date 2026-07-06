type ProfileFilterProps = {
  selectedFilter: string;
  onFilterChange: (value: string) => void;
};

const ProfileFilter = ({
  selectedFilter,
  onFilterChange,
}: ProfileFilterProps) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };
  return (
    <section>
      <label htmlFor="filter">Filter:</label>
      <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
        <option value="all">All profiles</option>
        <option value="available">Available profiles</option>
        <option value="remote">Remote profiles</option>
        <option value="onsite">On-site profiles</option>
        <option value="react">React profiles</option>
        <option value="angular">Angular profiles</option>
        <option value="vue">Vue profiles</option>
      </select>
      <p>Selected filter: {selectedFilter}</p>
    </section>
  );
};

export default ProfileFilter;
