import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<AlthMiddleware/>}>
      <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  </StrictMode>
);
