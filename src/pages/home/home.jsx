import { URL_API, API_KEY } from "../../utils/constants";
import { Row, Col } from "antd";
import useFetch from "../../hooks/useFetch";
import MovieList from "../../components/MovieList/MovieList";
import SliderMovies from "../../components/SliderMovies";
import "./home.sass";

const Home = () => {
  const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`;
  const newMovies = useFetch(url);

  const urlPopular = `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-ES&page=1`;
  const popularMovies = useFetch(urlPopular);

  const urlTopRanked = `${URL_API}/movie/top_rated?api_key=${API_KEY}&language=en-ES&page=1`;
  const topRankedMovies = useFetch(urlTopRanked);

  return (
    <div>
      <SliderMovies newMovies={newMovies} />
      <Row style={{marginBottom:'50px'}}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <MovieList title="Popular Movies" urlMovieList={popularMovies} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <MovieList title="Top Best Movies" urlMovieList={topRankedMovies} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
