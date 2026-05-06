import React from 'react';

export const NextJsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 180 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="currentColor"/>
    <rect x="115" y="54" width="12" height="72" fill="currentColor"/>
  </svg>
);

export const ReactIcon = ({ className }: { className?: string }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="currentColor">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const NodeJsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 118 118" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M57.915 0L6.685 29.832v58.948l51.23 29.219 51.583-29.219V29.832L57.915 0zm43.331 84.093l-43.331 24.398-43.08-24.398V33.682l43.08-24.167 43.331 24.167v50.411z" fill="#43853d"/>
    <path d="M35.632 72.844h10.871v-21.7c0-4.945 3.17-8.243 8.152-8.243 4.8 0 7.608 3.076 7.608 7.971v21.972h10.776V51.782c0-9.885-6.252-15.952-15.4-15.952-5.348 0-9.967 2.265-12.143 6.616v-5.617h-9.864v35.97v.045z" fill="#43853d"/>
  </svg>
);

export const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
