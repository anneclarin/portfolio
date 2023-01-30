import './App.scss';
import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
          {/* <Route index element={<Home />} /> */}
      </Routes>
    </>
  );
}