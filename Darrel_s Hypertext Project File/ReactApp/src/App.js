import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./HomePage.js";
import Game from './game';
import EndingPage from './EndingPage';

function App() {
  return(
  <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path='/game' element={<Game />}></Route>
      <Route path='/Ending/:ending' element={<EndingPage />}></Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;