import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-theme bg-surface-muted/50 py-12 mt-auto" aria-label="Footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-muted">
        <p>© {new Date().getFullYear()} ModernApp Starter. Built with React 19 & Tailwind CSS v4.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-ink transition-colors focus-ring">Privacy Policy</a>
          <a href="#" className="hover:text-ink transition-colors focus-ring">Terms of Service</a>
          <a href="https://github.com/louals" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors focus-ring">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
