import React from "react";
import styledNative from "styled-components/native";

function PaddingWrapper({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styledNative.View`
  padding: 16px;
`;

export default PaddingWrapper;
