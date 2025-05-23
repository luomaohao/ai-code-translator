import React from 'react';

export const GridIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.33">
    <rect x="1.33" y="2" width="12.67" height="12.67" rx="2" ry="2"/>
    <rect x="5.33" y="6.67" width="1.33" height="2.67"/>
    <rect x="9.33" y="6.67" width="1.33" height="2.67"/>
  </svg>
);

export const ListIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.33">
    <circle cx="8" cy="8" r="6"/>
    <circle cx="8" cy="5.33" r="2.1"/>
  </svg>
);

export const StarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="3" x2="12" y2="3.1"/>
    <circle cx="19.2" cy="6.8" r="2.1"/>
    <line x1="21" y1="12" x2="21.1" y2="12"/>
    <circle cx="19.2" cy="19.2" r="2.1"/>
    <line x1="12" y1="21" x2="12.1" y2="21"/>
    <circle cx="4.8" cy="19.2" r="2.25"/>
    <line x1="3" y1="12" x2="3.1" y2="12"/>
    <circle cx="4.8" cy="6.8" r="2.1"/>
  </svg>
);

export const SendIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M2.5 1.5l10 6.5-10 6.5V1.5z"/>
  </svg>
);

export const PlusIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.33">
    <line x1="2" y1="4" x2="12" y2="4"/>
    <path d="M3.33 4l9.33 10.67"/>
    <path d="M5.33 1.33L5.33 4"/>
  </svg>
);

export const SettingsIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.33">
    <circle cx="8" cy="8" r="3"/>
    <path d="M12.9 8.5a1 1 0 0 0-.2-.3l-.5-.5a1 1 0 0 0-.7-.3h-.5v-.8h.5a1 1 0 0 0 .7-.3l.5-.5a1 1 0 0 0 .2-.3"/>
  </svg>
); 