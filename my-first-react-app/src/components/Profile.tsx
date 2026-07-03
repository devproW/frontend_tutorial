// import React from 'react'

import Goal from "./Goal";
import Intro from "./Intro";
import type { ProfileProps } from "../types/profile";

const Profile = ({
  name,
  title,
  description,
  goal1,
  goal2,
  goal3,
}: ProfileProps) => {
  return (
    <div>
      <Intro name={name} title={title} description={description} />

      <Goal goal1={goal1} goal2={goal2} goal3={goal3} />

      <button>Contact Me</button>
    </div>
  );
};

export default Profile;
