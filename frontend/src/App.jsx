import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from "@/pages/Public/PublicRouter";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
