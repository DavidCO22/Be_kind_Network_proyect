import Login from './Login/LoginPage.jsx';
import MainPageLayout from './MainLayout/MainPageLayout.jsx';
import Home from './Home/HomePage.jsx';
import Bakanes from './Bakanes/BakanesPage.jsx';
import BakanesCategories from './Bakanes/Subroot/BakanesCategoriesPage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
          <div className="App">
            <Routes>

              <Route path="/" element={<Login />} />

              <Route element={<MainPageLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/bakanes" element={<Bakanes />}>
                  <Route path='/bakanes/categories' element={<BakanesCategories />}></Route>
                </Route>
              </Route>
            
            </Routes>
          </div>
      </Router>
  )
}

export default App
