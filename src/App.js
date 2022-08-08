import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkDown] = useState('### Markdown Preview');
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>
        <article className="result">
          <h1>markdown preview</h1>
          <h3>no</h3>
        </article>
      </section>
    </main>
  );
}

export default App;
