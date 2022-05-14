import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Recipe from './components/recipes/Recipe';

function App() {

  const recipeTest = {
    id: "Test name",
    ingredients: [
      { name: 'chicken breast', quantity: 2, unit: 'kg' },
      { name: 'oil', quantity: 1, unit: 'tbs' },
      { name: 'salt', quantity: 1, unit: 'pinch' },
    ],
    steps: [
      'heat pan', 'place chiken on hot pan', 'season with salt'
    ]
  }

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
          <Route path="/test" element={<Recipe {...recipeTest} />} />
          <Route path="*" element={<div>
            <h1>There is nothing here</h1>
          </div>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
