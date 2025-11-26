import type { AppTheme } from "@/src/styles/theme";
import React from "react";
import styledNative from "styled-components/native";

export default function SettingsScreen() {
  return (
    <Container>
      <Title>SettingsScreen</Title>
    </Container>
  );
}

const Container = styledNative.View`
  flex: 1;
`;

const Title = styledNative.Text`
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.text};
`;
