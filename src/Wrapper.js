import React from 'react';
import Router from './Router';
import AuthProvider from './context/Auth';

export default () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
