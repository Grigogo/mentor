import {
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router";
import "./App.css";
import { RefsPage } from "./pages/RefsPage";
import { EffectsPage } from "./pages/EffectsPage";
import { RimPage } from "./pages/RimPage";

const TOPICS = [
  { to: "/refs", label: "Refs" },
  { to: "/effects", label: "Effects" },
  { to: "/rim", label: "Rick and Morty" },
];

function App() {
  return (
    <>
      <nav className="top-nav">
        {TOPICS.map(({ to, label }) => (
          <NavLink key={to} to={to}>
            {label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/refs" replace />
          }
        />
        <Route
          path="/refs"
          element={<RefsPage />}
        />
        <Route
          path="/effects"
          element={<EffectsPage />}
        />
        <Route
          path="/rim"
          element={<RimPage />}
        />
        <Route
          path="*"
          element={
            <section className="page">
              <p className="page-empty">
                Такой страницы нет — выбери тему
                сверху.
              </p>
            </section>
          }
        />
      </Routes>

      <section id="spacer"></section>
    </>
  );
}

export default App;
