import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  return (
    <main>
      <section className="markdown">
        <textarea className="input"></textarea>
        <article className="result">
          <h1>markdown preview</h1>
          <h3>no</h3>
        </article>
      </section>
    </main>
  );
}

export default App;
