import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import PagesLayout from "../layouts/PagesLayout";
import AboutUs from "../pages/AboutUs";
import Artists from "../pages/Artists";
import Artist from "../pages/Artist";
import GetInTouch from "../pages/GetInTouch";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route element={<PagesLayout />}>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="artists" element={<Artists />} />
        <Route path="artists/:artist" element={<Artist />} />
        <Route path="get-in-touch" element={<GetInTouch />} />
      </Route>
    </Route>
  )
);

export default router;
