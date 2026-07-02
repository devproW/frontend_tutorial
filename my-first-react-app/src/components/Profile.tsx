// import React from 'react'

import Goal from "./Goal"
import Intro from "./Intro"

type ProfileProps = {
  name: string;
  title: string;
  description: string;
  goal1: string;
  goal2: string;
  goal3: string;
};

const Profile = ({ name, title, description, goal1, goal2, goal3 }: ProfileProps) => {
  return (
    <div>
        <Intro
         name = {name}
         title = {title}
         description = {description} 
        />

        <Goal
         goal1 = {goal1}
         goal2 = {goal2}
         goal3 = {goal3}
        />

        <button>Contact Me</button>
    </div>
  )
}

export default Profile