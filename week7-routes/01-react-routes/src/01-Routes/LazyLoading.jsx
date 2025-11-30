import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Landing = lazy(() => import("../components/Landing"));
const Dashboard = lazy(() => import("../components/Dashboard"));

function LazyLoading() {
  return (
    <BrowserRouter>
      <Appbar />
      <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard Page</button>
    </div>
  );
}

export default LazyLoading;
