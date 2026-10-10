import './App.css';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import SkillsPage from './pages/SkillsPage';
import HomePage from './pages/HomePage'; 
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="skills" element={<SkillsPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
}

export default App;