import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* me redirige a movies details de acuerdo a un id de pelicula */}
      </Routes>
    </Router>
  );
};
