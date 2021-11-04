import React from 'react';
import { MainPage } from '../pages';
import { Route } from 'react-router-dom';

export function MainRouter() {
  return (
    <>
      <Route path="/" component={MainPage} />
    </>
  );
}
