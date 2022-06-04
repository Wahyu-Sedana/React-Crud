import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { MahasiswaList } from "./components/MahasiswaList"; 
import AddMahasiswa from "./components/AddMahasiswa";
import EditMahasiswa from "./components/UpdateMahasiswa";

function App() {
  return (
    <Router>
      <div className="container">
      <div className="columns mt-5">
        <div className="column is-half is-offset-one-quarter">
        <Routes>
          <Route path="/" element={<MahasiswaList/>}/>
          <Route path="/add" element={<AddMahasiswa/>}/>
          <Route path="/edit/:mahasiswa_id" element= { <EditMahasiswa/> }></Route>
        </Routes>
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
