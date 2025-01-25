import "./App.css";
import { Button } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Nav from "./Components/Nav";
import Content from "./Components/Content";
import Textbar from "./Components/Textbar";
import DataContextProvider from "./Context/DataContextProvider";
import Footer from "./Components/Footer";

function App() {
  let getData = (data) => {
    console.log(data);
    return data;
  };

  return (
    <DataContextProvider>
      <div className="App">
        <div className=" flex w-[100vw]">
          <Sidebar />
          <div className="main w-full items-center justify-between flex flex-col h-[100vh] bg-[#121315]">
            <Nav />

            <Content />

            <Footer />
          </div>
        </div>
      </div>
    </DataContextProvider>
  );
}

export default App;
