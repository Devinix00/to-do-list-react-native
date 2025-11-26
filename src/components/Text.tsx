import React from "react";
import styled from "styled-components/native";

import type { AppTheme } from "@/src/styles/theme";

const BaseText = styled.Text`
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.text};
`;

export type TextProps = React.ComponentProps<typeof BaseText>;

export default function Text(props: TextProps) {
  return <BaseText {...props} />;
}
