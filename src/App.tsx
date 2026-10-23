import React from "react";
import { Route, Switch } from "wouter";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SkipLink } from "./components/SkipLink";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-ink transition-colors">
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route>
            <div className="py-24 text-center space-y-4">
              <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
              <p className="text-ink-muted">The page you are looking for does not exist.</p>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
