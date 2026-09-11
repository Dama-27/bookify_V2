import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ marginTop: '3rem', padding: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
      &copy; {new Date().getFullYear()} Bookify E-Commerce. All rights reserved.
    </footer>
  );
};

