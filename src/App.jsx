import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="container">
      <header>
        <h1>🚀 ChatGPT 5 Website Starter</h1>
        <p>A minimal React + Vite project ready for GitHub + Hostinger CI/CD.</p>
      </header>

      <main>
        <button onClick={() => setCount(c => c + 1)}>Clicked {count} times</button>
        <section className="features">
          <div>
            <h3>Fast Dev</h3>
            <p>Run <code>npm run dev</code> and start building.</p>
          </div>
          <div>
            <h3>CI/CD</h3>
            <p>Auto-deploy to Hostinger on push to <code>main</code>.</p>
          </div>
          <div>
            <h3>PR Previews</h3>
            <p>Each pull request posts a live preview via GitHub Pages.</p>
          </div>
        </section>
      </main>

      <footer>
        <small>Made with Vite + React • Edit <code>src/App.jsx</code> to customize</small>
      </footer>
    </div>
  )
}
