
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'
import "./index.css";
import Home from './views/Home';

const root = createRoot(document.getElementById("root"));

root.render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<h1>Home</h1>}/>
</Routes>
</BrowserRouter>
)
