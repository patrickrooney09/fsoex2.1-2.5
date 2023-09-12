import Note from "./components/Note";

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((currentNote) => {
          return <Note key={currentNote.id} note={currentNote} />;
        })}
      </ul>
    </div>
  );
};

export default App;
