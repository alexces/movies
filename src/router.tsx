import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";

const routes = (
    <Route path='/' element={<App />} />
);

export const browserRouter = createBrowserRouter(createRoutesFromElements(routes));