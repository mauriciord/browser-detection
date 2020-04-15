import React from "react";
import { Normalize } from "styled-normalize";

type Props = {
  children: React.ReactNode;
};

const AppContent = ({ children }: Props) => (
  <>
    <Normalize />
    {children}
  </>
);

export default AppContent;
