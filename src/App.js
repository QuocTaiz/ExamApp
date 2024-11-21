import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import {LoginPage, SignUpPage, ForgotPassword} from './pages';

import BoxUser from './components/BoxUser';

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/forgotpassword' element={<ForgotPassword/>} />

          <Route path='/testavatar' element={<BoxUser/>}/>
        </Routes>
      
    </BrowserRouter>
    
    
  );
}

export default App;
