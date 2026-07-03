export type ProfileData = {
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

export type ProfileProps = {
  name: string;
  title: string;
  description: string;
  goal1: string;
  goal2: string;
  goal3: string;
};
