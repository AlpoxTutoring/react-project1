/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import { useState } from 'react';

const footerStyle = css`
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
`;

const Footer = () => {
  return <div style={footerStyle}></div>;
};

export default Footer;
