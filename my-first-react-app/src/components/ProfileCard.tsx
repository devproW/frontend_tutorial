type ProfileCardProps = {
  name: string;
  role: string;
  location: string;
  learningGoal: string;
  isAvailable: boolean;
  yearsOfExperience: number; 
};  

const ProfileCard = ({ name, role, location, learningGoal, isAvailable, yearsOfExperience }: ProfileCardProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Location: {location}</p>
      <p>Experience: {yearsOfExperience} {yearsOfExperience === 1 ? "year" : "years"}</p>
      <p>Learning Goal: {learningGoal}</p>
      <p>Status: {isAvailable ? "Available for collaboration" : "Currently focused on learning"}</p>
    </div>
  )
}

export default ProfileCard
