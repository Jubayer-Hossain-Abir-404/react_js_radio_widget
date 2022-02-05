import "./App.css";
import BodyContent from "./components/BodyContent";
import FooterContent from "./components/FooterContent";
import Header from "./components/Header";
import ClickContextProvider from "./contexts/ClickContext";

function App() {
  return (
    // here the whole app is wrapped around ClickContextProvider so that context AudioParam
    // could be used
    <ClickContextProvider>
      <div className="App">
        {/* here the main three components are header, body and footer */}
        <Header />
        <BodyContent />
        <FooterContent />
      </div>
    </ClickContextProvider>
  );
}

export default App;
