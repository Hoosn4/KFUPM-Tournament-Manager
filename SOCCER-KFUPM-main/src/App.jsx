// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AdminLayout from './layouts/AdminLayout';
import GuestLayout from './layouts/GuestLayout';

// Admin pages
import Dashboard from './pages/admin/Dashboard';
import Tournaments from './pages/admin/Tournaments';
import Teams from './pages/admin/Teams';
import Players from './pages/admin/Players';
import Matches from './pages/admin/Matches';
import Fields from './pages/admin/Fields'; // Import the Fields component

// Guest pages
import MatchResults from './pages/guest/MatchResults';
import TopScorers from './pages/guest/TopScorers';
import RedCards from './pages/guest/RedCards';
import TeamMembers from './pages/guest/TeamMembers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="teams" element={<Teams />} />
          <Route path="players" element={<Players />} />
          <Route path="matches" element={<Matches />} />
          <Route path="fields" element={<Fields />} /> {/* Add the Fields route */}
        </Route>
        
        {/* Guest routes */}
        <Route path="/guest" element={<GuestLayout />}>
          <Route path="match-results" element={<MatchResults />} />
          <Route path="top-scorers" element={<TopScorers />} />
          <Route path="red-cards" element={<RedCards />} />
          <Route path="team-members" element={<TeamMembers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;