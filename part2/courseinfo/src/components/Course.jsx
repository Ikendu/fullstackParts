import Header from "./Header";

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <ul>
      {course.parts.map((part) => (
        <li key={part.id}>
          {part.name} {part.exercises}
        </li>
      ))}
    </ul>
    <div>
      <p>
        Total exercises:{" "}
        {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
      </p>
    </div>
  </div>
);
export default Course;
