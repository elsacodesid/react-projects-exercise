import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/rating";
import ImageSlider from "./components/slider";
import LoadMoreButton from "./load-more-button";
import TestCors from "./components/test-cors";
import TreeView from "./tree-view";
import { menus } from "./tree-view/data";
import ItemList from "./components/test";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";

function App() {
  return (
    <div className="App">
      {/* Accordion component
      <Accordion /> */}

      {/* Random color component
      <RandomColor /> */}

      {/* Rating
      <StarRating noOfStars={10} /> */}

      {/* Load More Button component 
      <LoadMoreButton /> */}

      {/* <TestCors /> */}

      {/* TreeView Component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* Testing */}
      {/*       
      <ItemList /> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light Dark Mode */}
      <LightDarkMode />
    </div>
  );
}

export default App;
