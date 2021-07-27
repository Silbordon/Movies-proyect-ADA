import { useState, useEffect } from "react";
import { URL_API, API_KEY } from "../../utils/constants";
import { Input } from "antd";
import { VideoCameraFilled } from "@ant-design/icons";
import MovieCard from "../../components/MovieCard";
import PaginationMovie from "../../components/PaginationMovie";
import Footer from "../../components/Footer";
import "./search.sass";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/search/movie?api_key=${API_KEY}&languaje=en-ES&query=${inputValue}&page=${page}&include_adult=false`
      );
      const movies = await response.json();
      setLoadingState(false);
      setUrl(movies);
    })();
  }, [page, inputValue]);

  const onChangePage = (page) => setPage(page);

  const onHandlerInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="main-container">
        <div className="input-container">
          <label htmlFor="search">Search Movie</label>
          <Input
            onKeyUp={onHandlerInput}
            size="large"
            placeholder="Type here to search"
            prefix={<VideoCameraFilled />}
          />
        </div>
        <MovieCard url={url} loadingState={loadingState} />
        <PaginationMovie
          currentPage={url.page}
          totalItems={url.total_results}
          onChangePage={onChangePage}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
