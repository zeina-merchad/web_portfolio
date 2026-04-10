import React from 'react';
import { personalInfo } from '../data';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-400">
          © {year} {personalInfo.name}. Built with React &amp; TypeScript.
        </p>
        <div className="flex items-center gap-6">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-ink-400 hover:text-accent transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-ink-400 hover:text-accent transition-colors">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`}
            className="font-mono text-xs text-ink-400 hover:text-accent transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
