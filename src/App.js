import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alldata from './components/Alldata';
import SingalData from './components/SingalData';



function App() {
 return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Alldata />} />
          <Route path="SingalData/:id" element={<SingalData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
 )
}

export default App;