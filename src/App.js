import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Recipe from './components/recipes/Recipe';
import RecipeListing from './components/recipes/RecipeListing';
import RecipeForm from './components/recipes/RecipeForm';

function App() {

  return (
    <Router>
      <NavBar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<RecipeListing />} />
          <Route path="/my-recipes" element={<RecipeListing />} />
          <Route path="/new-recipe" element={<RecipeForm />} />
          <Route path="*" element={<div>
            <h1>There is nothing here</h1>
          </div>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
