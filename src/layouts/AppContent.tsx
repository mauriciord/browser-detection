import React from "react";
import { Normalize } from "styled-normalize";

import GlobalFonts from "../assets/fonts/fonts";

type Props = {
  children: React.ReactNode;
};

const AppContent = ({ children }: Props) => (
  <>
    <GlobalFonts />
    <Normalize />
    {children}
  </>
);

export default AppContent;
