type IntroProps = {
  name: string;
  title: string;
  description: string;
};

const Intro = ({ name, title, description }: IntroProps) => {
  return (
    <div>
      <h1>Hi, I'm {name}</h1>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
};

export default Intro;
