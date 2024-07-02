import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import CharactersPage from "./pages/CharactersPage";
import CharPage from "./pages/CharPage"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children : [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "about/",
                element: <AboutPage />
            },
            {
                path: "characters/",
                element: <CharactersPage />
            },
            {
                path: "character/:id",
                element: <CharPage />
            },
        ],
        errorElement: <NotFound />,
    }
])

export default router;