import React from 'react';

export const NextJsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" className={className} fill="currentColor">
    <path d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64zm0-118.519c30.111 0 54.519 24.407 54.519 54.519S94.111 118.519 64 118.519 9.481 94.111 9.481 64 33.889 9.481 64 9.481z"/>
    <path d="M85.498 83.181l-31.57-41.52H44.13v44.678h8.847V51.785l26.653 35.845h-10.635v8.847h16.503z"/>
    <path d="M90.575 41.662h-8.847v44.678h8.847z"/>
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
  <svg viewBox="0 0 128 128" className={className} fill="currentColor">
    <path fill="#43853d" d="M63.854 2.87L9.585 34.205v62.67l54.269 31.335 54.265-31.335V34.205L63.854 2.87zM64 117.727L22.991 94.05V46.685L64 22.998l41.009 23.687v47.364L64 117.727z"/>
    <path fill="#43853d" d="M37.893 79.529h12.56V54.498c0-5.713 3.663-9.522 9.418-9.522 5.545 0 8.789 3.553 8.789 9.208v25.345h12.449V53.24c0-11.417-7.221-18.423-17.788-18.423-6.177 0-11.512 2.616-14.024 7.641V36.071h-11.404v43.458z"/>
  </svg>
);

export const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
