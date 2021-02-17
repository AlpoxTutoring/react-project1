import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components'

const Portal= ({ children }) => {
  // const target = usePortal(id);
  const target = document.getElementById('root');

  useEffect(() => {
    return () => {
      document.getElementsByTagName('body')[0].removeAttribute('style');
    };
  }, []);

  return target ? createPortal(children, target) : null;
};

export default Portal;
