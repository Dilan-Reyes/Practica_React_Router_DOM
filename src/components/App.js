import SiderBar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import "../assets/css/app.css";
import { Route, Routes } from "react-router-dom";
import { GenresInDb } from "./GenresInDb";
import { LastMovieInDb } from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";
import ContentRowTop from "./ContentRowTop";


const App = () => {
  return (
    <div id='wrapper'>
      <SiderBar />
      <ContentWrapper />
      <Routes>
        <Route path="/GenresInDb" element={<GenresInDb/>}/>
        <Route path="/LastMovieInDb" element={<LastMovieInDb/>}/>
        <Route path="/ContentRowMovies" element={<ContentRowMovies/>}/>
        <Route path="*" element={<p>Error 404, no encontramos lo que solicitaste. </p>}/>
        <Route path="/" element={<ContentRowTop/>}/>
      </Routes>
    </div>
  );
};

export default App;
