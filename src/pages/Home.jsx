import "../css/Home.css";
import InputForm from "../components/InputForm";
import MovieContainer from "../components/MovieContainer";

function Home() {
  return (
    <div className="home">
      <InputForm />
      <MovieContainer />
    </div>
  );
}

export default Home;
