import styled from "styled-components"

export const InputButton = styled.div`
  background-color: ${({color}) => color};
  width: 5vw;
  height: 5vw;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-out;
  color: #eee;

  &:hover {
    background-color: ${({secondaryColor}) => secondaryColor};
    color: #000;
  }

  @media screen and (max-width: 600px) {
    width: 4rem;
    height: 4rem;
  }
`