import logo from "./logo.svg";
import "./App.css";
import { Home2 } from "./pages/Home2.jsx";
import { Home } from "./pages/Home";
import NavBar from "./pages/NavBar";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className="App">
        <NavBar darkMode={darkMode}  setDarkMode={setDarkMode}/>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
