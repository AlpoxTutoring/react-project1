import React from 'react';
import { BoardPage } from '../pages';
import { Route } from 'react-router-dom';

export function BoardRouter() {
  return (
    <>
      <Route path="/board" component={BoardPage} />
    </>
  );
}
