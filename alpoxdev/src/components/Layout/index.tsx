import React from "react";
import styled from "styled-components";

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutContent>{children}</LayoutContent>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const LayoutContent = styled.div`
  width: calc(108 - 100px);
  min-height: 100vh;
  margin: 0 auto;
  margin-left: 80px;
  padding: 0 32px;
  padding-top: 50px;

  background-color: #fff;
`;
