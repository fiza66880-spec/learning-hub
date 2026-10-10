
import { BrowserRouter,Routes ,Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function Navbar (){
return(
<nav style={{display:'flex' , gap: '20px' , padding: '15px',background : '#eee' , color:'white'}}>
  <Link to="/" style={{color:'black',fontSize:'20px'}}>Home</Link>
<Link to="/about" style={{color:'black',fontSize:'20px'}}>About</Link>
<Link to="/contact" style={{color:'black',fontSize:'20px'}}>Contact</Link>
</nav>

);

}
function App (){
return(
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</BrowserRouter>
);
} export default App;
