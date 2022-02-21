import ContentRowMovies from "./ContentRowMovies";
import Chart from "./Chart";
import { LastMovieInDb } from "./LastMovieInDb";
import { GenresInDb } from "./GenresInDb";

const ContentRowTop = () => {
  let rowMoviesContent = [
    {
      titulo: "MOVIES IN DATA BASE",
      bordColor: "card border-left-primary shadow h-100 py-2",
      cifra: "21",
      icon: "fas fa-film fa-2x text-gray-300",
    },
    {
      titulo: "TOTAL AWARDS",
      bordColor: "card border-left-success shadow h-100 py-2",
      cifra: "79",
      icon: "fas fa-award fa-2x text-gray-300",
    },
    {
      titulo: "ACTORS QUANTITY",
      bordColor: "card border-left-warning shadow h-100 py-2",
      cifra: "49",
      icon: "fas fa-user fa-2x text-gray-300",
    },
  ];

  return (
    <div className='container-fluid'>
      <div className='d-sm-flex align-items-center justify-content-between mb-4'>
        <h1 className='h3 mb-0 text-gray-800'>App Dashboard</h1>
      </div>
      <ContentRowMovies rowMoviesContent={rowMoviesContent} />
      <div className='row'>
        <LastMovieInDb/>
        <GenresInDb/>
        <Chart />
      </div>
    </div>
  );
};

export default ContentRowTop;
