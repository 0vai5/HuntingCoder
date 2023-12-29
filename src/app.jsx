import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Nav";
import { Home, Blog, Login, Signup, Createpost, Profile, BlogPage} from './pages/index';

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/createpost" element={<Createpost />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/blogPage" element={<BlogPage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
