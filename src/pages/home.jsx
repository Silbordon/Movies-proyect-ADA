import useFetch from "../hooks/useFetch";
import SliderMovies from '../components/SliderMovies'
import { URL_API, API_KEY } from '../utils/constants'
import MovieList from "../components/MovieList/MovieList";
import { Row, Col } from "antd";
import Footer from '../components/Footer'

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
           <Row>
               <Col span={12}>
                    <MovieList title="Popular Movies" urlMovieList={popularMovies} />
               </Col>
               <Col span={12}>
                    <MovieList title="Top Best Movies" urlMovieList={topRankedMovies} />
               </Col>
           </Row>
           <Footer />
        </div>
    )
}

export default Home;