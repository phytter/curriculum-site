import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { About, Home } from "@/presentation/pages";

const Router = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      { children }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router
