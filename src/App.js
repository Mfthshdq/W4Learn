
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import TutorialCssPage from './Pages/TutorialCssPage';
import TutorialHtmlPage from './Pages/TutorialHtmlPage';
import TutorialReactPage from './Pages/TutorialReactPage';
import TutorialPage from './Pages/TutorialPage';
import ReferencesPage from './Pages/ReferencesPage';
import LoginPage from './Pages/LoginPage';
import QuizPage from './Pages/QuizPage';
import ProfilePage from './Pages/ProfilePage'
import ReferencesCssPage from './Pages/ReferencesCssPage';
import ReferencesReactPage from './Pages/ReferencesReactPage';
import ReferencesHtmlPage from './Pages/ReferencesHtmlPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/tutorial-css' element={<TutorialCssPage />} />
      <Route path='/tutorial-html' element={<TutorialHtmlPage />} />
      <Route path='/tutorial-react' element={<TutorialReactPage />} />
      <Route path='/tutorial' element={<TutorialPage />} />
      <Route path='/references' element={<ReferencesPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/quiz' element={<QuizPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/references-css' element={<ReferencesCssPage />} />
      <Route path='/references-react' element={<ReferencesReactPage />} />
      <Route path='/references-html' element={<ReferencesHtmlPage />} />
    </Routes>
  );
}

export default App;
