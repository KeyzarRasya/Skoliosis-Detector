import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import React, { Suspense } from 'react';
const Detect = React.lazy(() => import('./pages/Detect'));
const Main = React.lazy(() => import('./pages/Main'));

const AppRoutes = () => {
  const routes = [
    { path: '/', element: <Main /> },
    { path: '/detect', element: <Detect /> }
  ];

  return useRoutes(routes);
};

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
