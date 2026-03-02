import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import BlogFeeds from "./pages/BlogFeeds";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md p-4 flex justify-center gap-6 mb-8">
          <Link
            to="/feeds"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            Public Feeds
          </Link>
          <Link
            to="/admin/dashboard"
            className="text-gray-600 font-semibold hover:text-blue-800"
          >
            Admin Panel
          </Link>
        </nav>

        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<BlogFeeds />} />
            <Route path="/feeds" element={<BlogFeeds />} />
            <Route path="/feeds/:id" element={<BlogDetail />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
