import {Routes,Route} from "react-router-dom";
import Home from './pages/Home'; 
import Create from './pages/Create'; 
import Header from './components/Header'; 
function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create" element={<Create/>}/>
    </Routes>

    </>
  );
}

export default App;
