import React from "react";
import Main from "./pages/Main";
import ThemeContext from "./utilities/ThemeContext.js";
function App() {
  return (
    <ThemeContext>
      <Main />
    </ThemeContext>
  );
}

export default App;
