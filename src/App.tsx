import React from "react";
import "./App.css";
import Box from "@mui/material/Box";

import Policyholder from "./component/Policyholder";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Box padding={3}>
        <Policyholder />
      </Box>
    </>
  );
}

export default App;
