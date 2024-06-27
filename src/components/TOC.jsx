import Community from "./Community";

const TOC = (props) => {
  console.log(props);
  return (
    <nav>
      <h2>Table of Contents</h2>
      <Community />
    </nav>
  );
};

export default TOC;
