import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
  Navigate,
  Outlet
} from "react-router-dom";
import ChatbotList from "./components/ChatbotList";
import ChatbotForm from "./components/ChatbotForm";
import KnowledgeForm from "./components/KnowledgeForm";
import EmbedOptions from "./components/EmbedOptions";
import ChatWithChatbot from "./components/Chatting";
import ChatWithChatbotTTS from "./components/Chatting-tts";
import DeleteChatbot from "./components/DeleteChatbot";
import "./App.css"; // Import the CSS file
import Login from "./components/login";
import Signup from "./components/signup";
import Homepage from "./components/Homepage.js";
import Dashboard from "./components/dashboard.js";
// PrivateRoute component to protect admin routes
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
function App() {
  return (
    <Router>
      <RouteSwitch />
    </Router>
  );
}

// Wrapper component to conditionally render UI elements and manage scrolling
function RouteSwitch() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/"; // Check if it's the home route
  const isChatRoute = location.pathname.startsWith("/chat");
  const isAdminRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/create") ||
    location.pathname.startsWith("/add-knowledge") ||
    location.pathname.startsWith("/embed") ||
    (location.pathname.includes("/chat/") &&
      location.pathname.endsWith("/delete")); // Admin routes

  useEffect(() => {
    if (isChatRoute) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isChatRoute]);

  return (
    <div>
      {/* Only show admin content when it's an admin route and not the home route */}
      {!isHomeRoute && isAdminRoute && (
        <header className="Admin">
          <h1>AI Chatbot Generator</h1>
          <ul>
            <li>
              <Link to="/">Chatbot List</Link>
            </li>
            <li>
              <Link to="/create">Create Chatbot</Link>
            </li>
          
            <li>
              <Link to="/add-knowledge/:chatbotId">Add Knowledge</Link>
            </li>
            <li>
              <Link to="/embed/:chatbotId">Embed Options</Link>
            </li>
            <li>
              <Link to="/embed/:chatbotId/tts">Embed Options (TTS)</Link>
            </li>
               <li>
              <Link to="/dashboard">Dashboard</Link>
            </li> 
          </ul>
        </header>
      )}

      <div className={`App ${isAdminRoute ? "admin-view" : ""}`}>
        <main className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/create" element={<ChatbotForm />} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/add-knowledge/:chatbotId" element={<KnowledgeForm />} />
              <Route path="/embed/:chatbotId" element={<EmbedOptions />} />
              <Route path="/chat/:chatbotId" element={<ChatWithChatbot />} />
              <Route path="/chat/:chatbotId/tts" element={<ChatWithChatbotTTS />} />
              <Route path="/chat/:chatbotId/delete" element={<DeleteChatbot />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <ChatbotList />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
