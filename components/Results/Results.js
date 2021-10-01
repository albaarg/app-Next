import Movie from "../Movie/Movie";

function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <Movie key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
