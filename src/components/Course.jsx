import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

function Course({ course }) {
  const { id, name, parts } = course;

  const sum = parts.reduce((accumulator, currentElement) => {
    const number = currentElement.exercises;
    return accumulator + number;
  }, 0);

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} id={id} />
      <Total sum={sum} />
    </div>
  );
}

export default Course;
