import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const OverviewPage = lazy(() => import("./pages/Overview/"));
const OfficePage = lazy(() => import("./pages/Offices/"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={OverviewPage} />
          <Route path="/offices/:companyId" component={OfficePage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
