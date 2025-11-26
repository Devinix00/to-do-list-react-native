import React from "react";
import { TouchableOpacityProps } from "react-native";
import styledNative from "styled-components/native";

import type { AppTheme } from "../styles/theme";
import Text from "./Text";

type Variant = "primary" | "ghost";
type Size = "sm" | "md";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: Variant;
  size?: Size;
}

const BaseButton = styledNative.TouchableOpacity<{
  variant: Variant;
  size: Size;
}>`
  border-radius: 999px;
  padding-vertical: ${({ size }) => (size === "sm" ? 6 : 10)}px;
  padding-horizontal: ${({ size }) => (size === "sm" ? 12 : 18)}px;
  background-color: ${({ variant, theme }: { variant: Variant; theme: AppTheme }) => {
    if (variant === "primary") return theme.colors.primary;
    const isDark = theme.colors.background === "#050816";
    // 라이트 모드: 카드(surface)보다 살짝 진한 회색
    // 다크 모드: 카드(surface)보다 약간 밝은 톤으로 분리
    return isDark ? "#1f2937" : theme.colors.surfaceElevated;
  }};
  border-width: 0px;
  justify-content: center;
  align-items: center;
`;

const ButtonLabel = styledNative(Text)<{ variant: Variant }>`
  font-size: 13px;
  font-weight: 600;
  color: ${({ variant, theme }: { variant: Variant; theme: AppTheme }) =>
    variant === "primary" ? theme.colors.surface : theme.colors.text};
`;

export default function Button({
  label,
  variant = "primary",
  size = "md",
  ...touchableProps
}: ButtonProps) {
  return (
    <BaseButton variant={variant} size={size} activeOpacity={0.85} {...touchableProps}>
      <ButtonLabel variant={variant}>{label}</ButtonLabel>
    </BaseButton>
  );
}


