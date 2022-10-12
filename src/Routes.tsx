import { Routes as Router, Route, Navigate } from 'react-router-dom';

import Users from 'pages/users';
import Repositories from 'pages/repositories';

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Navigate to="/users" replace />} />
      <Route path="/users" element={<Users />} />
      <Route path="/repositories" element={<Repositories />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Router>
  );
}

export default Routes;