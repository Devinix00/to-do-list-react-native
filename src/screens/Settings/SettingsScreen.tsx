import PaddingWrapper from "@/src/components/PaddingWrapper";
import Switch from "@/src/components/Switch";
import Text from "@/src/components/Text";
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
    <PaddingWrapper>
      <Text variant="heading1">설정</Text>
      <Row>
        <Text variant="body">다크 모드</Text>
        <Switch value={isDark} onValueChange={handleToggle} />
      </Row>
    </PaddingWrapper>
  );
}

const Row = styledNative.View`
  margin-top: 20px;
  padding: 16px 20px;
  border-radius: 12px;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.surface};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
