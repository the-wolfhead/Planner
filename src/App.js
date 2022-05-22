import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard'
import ProjectDetails from './Projects/ProjectDetails';
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import CreateProject from './Projects/CreateProject'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Dashboard/>} />
        <Route path ='/project/:id' element={<ProjectDetails/>} />
        <Route path = '/signin' element={<SignIn/>} />
        <Route path = '/signup' element={<SignUp/>} />
        <Route path = '/create' element={<CreateProject/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
