import './App.css';
import Viewer from './Viewer';
import Magnifier from "react-magnifier";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {

  const images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'
  ]


  return (
    <div className="App">
      <Viewer />
    </div>
  );
}

export default App;
