import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
