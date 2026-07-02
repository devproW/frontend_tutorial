
type GoalProps = {
  goal1: string;
  goal2: string;
  goal3: string;
};

const Goal = ({ goal1, goal2, goal3 }: GoalProps) => {
  return (
    <div>
        <h2>Things I want to build</h2>

        <ul>
            <li>{goal1}</li>
            <li>{goal2}</li>
            <li>{goal3}</li>
        </ul>
    </div>
  )
}

export default Goal