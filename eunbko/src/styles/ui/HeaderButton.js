import React from "react"
import styled from "styled-components"

const Button = styled.button`

  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  border-radius: 24px;
  margin-left:4px;
  margin-right:4px;
  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
`

export function HeaderButton({ children, color, background, onClick }) {
  return (
    <Button  color={color} background={background} onClick={onClick}>
      {children}
    </Button>
  )
}