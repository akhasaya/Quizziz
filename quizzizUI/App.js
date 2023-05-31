import AddQuestion from './AddQuestion';
import AdminActions from './AdminActions';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Candidate from './Candidate';
import Questions from './Questions';
import HomePage from './HomePage';
import DisplayScore from './DisplayScore';
import Scores from './Scores';

function App() {
  return (
    <div className="App">
      <h1>Quizizz Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/admin" element={<AdminActions />} ></Route>
          <Route path="/candidate" element={<Candidate />} ></Route>
          <Route path="/question" element={<AddQuestion />} ></Route>
          <Route path="/questions" element={<Questions />} ></Route>
          <Route path="/display" element={<DisplayScore />} ></Route>
          <Route path="/scores" element={<Scores/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
