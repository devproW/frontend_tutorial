type ProfileCardProps = {
  name: string;
  role: string;
  location: string;
  learningGoal: string;
  isAvailable: boolean;
  yearsOfExperience: number; 
  favoriteTechnology: string;
};  

const ProfileCard = ({ name, role, location, learningGoal, isAvailable, yearsOfExperience, favoriteTechnology }: ProfileCardProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Location: {location}</p>
      <p>Experience: {yearsOfExperience} {yearsOfExperience === 1 ? "year" : "years"}</p>
      <p>Learning Goal: {learningGoal}</p>
      <p>Status: {isAvailable ? "Available for collaboration" : "Currently focused on learning"}</p>
      <p>Favorite Technology: {favoriteTechnology}</p>
    </div>
  )
}

export default ProfileCard
