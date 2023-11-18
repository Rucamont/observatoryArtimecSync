import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Observatory from './routes/Observatory';
import Home from './routes/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Header></Header>}/>
      <Route path='/explora' element = {<Observatory></Observatory>}/>
      <Route path='/home' element = {<Home></Home>}/>

      </Routes>
    </>
  );
}

export default App;
