import React from 'react';

export const FullWidth = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`w-full px-4 py-8${className && ` ${className}`}`}>{children}</div>;
};

export const MaxWidth = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`w-full max-w-[1200px] mx-auto px-4 py-8${className && ` ${className}`}`}>{children}</div>;
};
