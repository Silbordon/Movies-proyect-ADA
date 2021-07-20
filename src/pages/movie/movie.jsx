import { Row, Col, Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons'
import { useParams, } from 'react-router-dom';
import moment from 'moment';
import useFetch from '../../hooks/useFetch';
import './movie.sass';
import { URL_API, API_KEY } from '../../utils/constants';
import Loading from '../../components/Loading';
import ModalVideo from '../../components/ModalVideo';
import { useState } from 'react';


const Movie = () => {
  const { id } = useParams(); //nos da el ID

  const url = `${URL_API}/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const movieInfo = useFetch(url);

  if (movieInfo.Loading || !movieInfo.result) {
    return <Loading />;
  }

  return <RenderMovie movieInfo={movieInfo} />;
};

const RenderMovie = (props) => {
  const {
    movieInfo: {
      result: { backdrop_path, poster_path },
    },
  } = props;

  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className="movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="movie__dark">
        <Row className="fila">
          <Col span={8} offset={3} className="movie__poster">
            <PosterMovie image={poster_path} />
          </Col>
          <Col span={9}>
            <MovieInfo movieInfo={props.movieInfo} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const PosterMovie = (props) => {
  const { image } = props;
  const posterPath = `https://image.tmdb.org/t/p/original${image}`;
  console.log(posterPath);

  return <div style={{ backgroundImage: `url('${posterPath}')` }}></div>;
};

const MovieInfo = (props) => {
  const {
    movieInfo: {
      result: { title, id, release_date, overview, genres },
    },
  } = props;
  console.log(props.movieInfo);

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const url = `${URL_API}/movie/${id}/videos?api_key=${API_KEY}&language=es-US`;
  const videoMovie = useFetch(url);

  const openModal = () => setIsVisibleModal(true);

  const closeModal = () => setIsVisibleModal(false);

  const renderVideo = () => {
    if (videoMovie.result) {
      if (videoMovie.result.results.length > 0) {
        return (
          <div>
            <Button icon={<PlayCircleOutlined />} onClick={openModal} className='button'>
              ver trailer
            </Button>
            <ModalVideo
              videoKey={videoMovie.result.results[0].key}
              videoPlatform={videoMovie.result.results[0].site}
              isOpen={isVisibleModal}
              close={closeModal}
            />
          </div>
        );
      }
    }
  };
  return (
    <div>
      <div className="info">
        <h1>
          {title}
          <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
        </h1>
        {renderVideo()}
      </div>
      <div className="content">
        <h3>General</h3>
        <p>{overview}</p>
        <h3>Generos</h3>
        <ul>
          {genres.map((gender) => (
            <li key={gender.id}>{gender.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movie;
