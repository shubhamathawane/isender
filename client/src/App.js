import logo from "./logo.svg";
import "./App.css";
import { Home2 } from "./pages/Home2.jsx";
import { Home } from "./pages/Home";
import NavBar from "./pages/NavBar";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useEffect, useState } from "react";
import { SendCode } from "./pages/SendCode";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {
  
  const getTheme = () => {
    return JSON.parse(localStorage.getItem('theme'))  || false;
  }

  const [darkMode, setDarkMode] = useState(getTheme());

  useEffect (() => {
    localStorage.setItem("theme", JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className="App">
        <Router>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/code"
              element={
                <SendCode darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
