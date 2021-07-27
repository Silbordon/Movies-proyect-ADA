import { Pagination } from "antd";
import "./PaginationMovie.sass";

const PaginationMovie = (props) => {
  const { currentPage, totalItems, onChangePage } = props;
  return (
    <Pagination
      current={currentPage}
      total={totalItems}
      pageSize={20}
      onChange={onChangePage}
    />
  );
};

export default PaginationMovie;
