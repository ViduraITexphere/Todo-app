import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import SplashScreen from "./components/SplashScreen";
import Todos from "./components/Todos";

function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {!splashScreen && (
        <div className="app_wrapper">
          <h1>React Todo App 🔥</h1>
          <Todos />
          <Input />
        </div>
      )}
      <div>{splashScreen && <SplashScreen />}</div>
    </div>
  );
}

export default App;
