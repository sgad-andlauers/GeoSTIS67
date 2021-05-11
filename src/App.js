import './App.css';
import Dashboard from "./components/dashboard";
import DataContextProvider from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataContextProvider><Dashboard/></DataContextProvider>
      
    </div>
  );
}

export default App;
