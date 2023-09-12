import Content from "./Content";
import Header from "./Header";

function Course({ course }) {
  const { id, name, parts } = course;
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} id={id} />
    </div>
  );
}

export default Course;
