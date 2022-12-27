import "./App.css";
import { Row } from "./components/Row";
import url from "./request";
import Banner from "./components/Banner";
import { Nav } from "./components/Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        url={url.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" url={url.fetchTrending} />
      <Row title="Top Rated" url={url.fetchTopRated} />
      <Row title="Action Movies" url={url.fetchActionMovies} />
      <Row title="Comedy Movies" url={url.fetchComedyMovies} />
      <Row title="Horror Movies" url={url.fetchHorrorMovies} />
      <Row title="Romance Movies" url={url.fetchRomanceMovies} />
      <Row title="Documentaries" url={url.fetchDocumentaries} />
      <Row />
    </div>
  );
}

export default App;
