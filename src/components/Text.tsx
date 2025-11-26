import React from "react";
import styledNative from "styled-components/native";

import type { AppTheme } from "../styles/theme";

type Variant = "heading1" | "heading2" | "body" | "small";

const BaseText = styledNative.Text<{ variant?: Variant }>`
  color: ${(props: { theme: AppTheme }) => props.theme.colors.text};
  ${(props: { theme: AppTheme; variant?: Variant }) =>
    props.variant
      ? props.theme.textVariants[props.variant]
      : props.theme.textVariants.body};
`;

export interface TextProps
  extends Omit<React.ComponentProps<typeof BaseText>, "variant"> {
  variant?: Variant;
}

export default function Text({ variant = "body", ...rest }: TextProps) {
  return <BaseText variant={variant} {...rest} />;
}
