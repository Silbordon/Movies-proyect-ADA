import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import "./MovieCard.sass";

const MovieCard = (props) => {
  const { url, loadingState } = props;
  const { results } = url;

  if (!results) {
    return (
      <div className= {!loadingState ? "hidden" : null}>
        <Loading  />
      </div>
    )
  }

  console.log(loadingState);
  return (
    <Row gutter={[8, 32]}>
      {results.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </Row>
  );
};

const CardMovie = (props) => {
  console.log('detalles', props);
  const { Meta } = Card;
  const {
    movie: { id, title, poster_path },
  } = props;

  let backdropPath;

  if (poster_path === null) {
    backdropPath = 'https://i.pinimg.com/736x/04/85/5b/04855bae4a3237935ebfc655293400ca.jpg'
  } else {
    backdropPath = `https://image.tmdb.org/t/p/original${poster_path}`;
  }
  return (
    <Col span={6} className="centrar">
      <Link to={`/movie/${id}`}>
        <Card
          className="card"
          hoverable
          style={{ width: 240, height: 420 }}
          cover={
            <img
              alt={title}
              src={backdropPath}
              style={{ width: 240, height: 350 }}
            />
          }
        >
          <Meta title={title} className="title-card" />
        </Card>
      </Link>
    </Col>
  );
};

export default MovieCard;
