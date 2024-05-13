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
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tabs-test";
import ModalTest from "./components/modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import UseFetchTest from "./components/use-fetch/test";
import ScrollTopBottom from "./components/scroll-top-bottom";


function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Rating */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Load More Button component  */}
      {/* <LoadMoreButton /> */}

      {/* <TestCors /> */}

      {/* TreeView Component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* Testing */}
      {/* <ItemList /> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light Dark Mode */}
      {/* <LightDarkMode /> */}

      {/* Custom Scroll Indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products/?limit=100"} /> */}

      {/* Custom tabs */}
      {/* <TabTest /> */}

      {/* Modal Popup */}
      {/* <ModalTest /> */}

      {/* Github profile finder */}
      {/* <GithubProfileFinder /> */}

      {/*  Autocomplete api */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe */}
      {/* <TicTacToe /> */}

      {/* Feature Flag */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* Use Onclick Outside Hook test */}
      {/* <UseOnClickOutsideTest /> */}

      {/* Window Resize Hook */}
      {/* <UseWindowResizeTest /> */}

      {/* Use Fetch Hook */}
      {/* <UseFetchTest /> */}

      {/* Scroll Top Bottom */}
      <ScrollTopBottom />
     
    </div>
  );
}

export default App;
