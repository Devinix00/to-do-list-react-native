import Switch from "@/src/components/Switch";
import useThemeStore from "@/src/store/theme";
import type { AppTheme } from "@/src/styles/theme";
import React from "react";
import styledNative from "styled-components/native";

export default function SettingsScreen() {
  const mode = useThemeStore((state) => state.mode);
  const setMode = useThemeStore((state) => state.setMode);

  const isDark = mode === "dark";

  const handleToggle = (value: boolean) => {
    setMode(value ? "dark" : "light");
  };

  return (
    <Container>
      <Title>설정</Title>
      <Row>
        <Label>다크 모드</Label>
        <Switch value={isDark} onValueChange={handleToggle} />
      </Row>
    </Container>
  );
}

const Container = styledNative.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.background};
`;

const Title = styledNative.Text`
  ${({ theme }: { theme: AppTheme }) => theme.textVariants.heading1};
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.text};
`;

const Row = styledNative.View`
  margin-top: 24px;
  padding: 16px 20px;
  border-radius: 12px;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.surface};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Label = styledNative.Text`
  ${({ theme }: { theme: AppTheme }) => theme.textVariants.body};
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.text};
`;
