import { useState } from "react";
import { Row, Col, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { URL_API, API_KEY } from "../../utils/constants";
import { useParams } from "react-router-dom";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import ModalVideo from "../../components/ModalVideo";
import "./movie.sass";

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
          <Col span={9} className="movie-info-container">
            <MovieInfo movieInfo={props.movieInfo} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const PosterMovie = (props) => {
  const { image } = props;
  let posterPath;
  if (image === null) {
    posterPath =
      "https://i.pinimg.com/736x/04/85/5b/04855bae4a3237935ebfc655293400ca.jpg";
  } else {
    posterPath = `https://image.tmdb.org/t/p/original${image}`;
  }

  return (
    <div
      style={{ backgroundImage: `url('${posterPath}')` }}
      className="movie-poster-image"
    ></div>
  );
};

const MovieInfo = (props) => {
  const {
    movieInfo: {
      result: { title, id, release_date, overview, genres },
    },
  } = props;

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
            <Button
              icon={<PlayCircleOutlined />}
              onClick={openModal}
              className="button"
            >
              trailer
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
    <div className="movie-info">
      <div className="info">
        <h1>
          {title}
          <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
        </h1>
        {renderVideo()}
      </div>
      <div className="content">
        <h3>General</h3>
        <p>{overview === "" ? "No information" : overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.length === 0
            ? "No information"
            : genres.map((gender) => <li key={gender.id}>{gender.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Movie;
