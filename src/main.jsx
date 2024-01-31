import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CharacterDetail } from './page/CharacterDetail/CharacterDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/character/:id' element={<CharacterDetail />}/>
    </Routes>
  </BrowserRouter>
)
