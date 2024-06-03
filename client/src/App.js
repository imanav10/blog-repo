import './App.css';
import Layout from './Layout';
import {Route, Routes} from 'react-router-dom';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { AuthContextProvider } from './Context/AuthContext';
import Account from './Account';
import Protected from './Pages/Protected';
import Post from './Pages/Post';


function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/post' element={<Post />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path='/account' element={<Protected> <Account /> </Protected>}/>
          </Route>
          
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
