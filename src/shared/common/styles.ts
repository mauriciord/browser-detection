import styled from "styled-components";
import { cover } from "polished";

export const Cover = styled.div`
  ${cover()};
  background-color: rgba(21, 29, 39, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  padding: 30px 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1024px;
`;
