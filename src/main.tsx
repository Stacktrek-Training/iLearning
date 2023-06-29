import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Proceed from "./components/Upskill";
import LinuxCommand from "./pages/linux-command/index";
import GuessTheLogo from "./pages/guessTheLogo/index";
import Navbar from "./pages/april/components/Navbar";
import SQL from "./components/SQL";
import Landingpage from "./pages/michael/Landingpage";
import CsharpQuiz1 from "./pages/michael/mini-game/Quiz1";
import TypingGame from "./pages/Typing_Game/TheCoder/App";
import AuthenticationPage from "./pages/authentication/Loginpage";
import DragGame from "./pages/rene/Drag";
import APIQuiz from "./pages/uly/QuizTrek/APIquiz";
import ColorCodeExercise from "./pages/uly/ColorCode/App";
import GuessGame from "./pages/eljohn/Guess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/LoginPage",
    element: <AuthenticationPage />,
  },
  {
    path: "/Proceed",
    element: <Proceed />,
  },

  {
    path: "/Navbar",
    element: <Navbar />,
  },

  {
    path: "/games/linux-commands",
    element: <LinuxCommand />,
  },

  {
    path: "/games/guess-the-logo",
    element: <GuessTheLogo />,
  },
  {
    path: "/SQL",
    element: <SQL />,
  },
  {
    path: "/games/chsarpMP",
    element: <Landingpage />,
  },
  {
    path: "/games/CsharpQuiz1",
    element: <CsharpQuiz1 />,
  },
  {
    path: "/games/DragGame",
    element: <DragGame />,
  },
  {
    path: "/games/TypingGame",
    element: <TypingGame />,
  },
  {
    path: "/games/APIQuiz",
    element: <APIQuiz />,
  },
  {
    path: "/games/ColorCodeExercise",
    element: <ColorCodeExercise />,
  {
    path: "/games/GuessTheWord/",
    element: <GuessGame />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
