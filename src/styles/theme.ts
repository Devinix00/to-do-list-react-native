import { css } from "styled-components/native";

export interface ThemeColors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  background: string;
  surface: string;
  surfaceElevated: string;
  text: string;
  textMuted: string;
  border: string;
  danger: string;
  success: string;
}

export interface ThemeTypography {
  heading1: {
    size: number;
    lineHeight: number;
    weight: "700" | "600";
  };
  heading2: {
    size: number;
    lineHeight: number;
    weight: "700" | "600" | "500";
  };
  body: {
    size: number;
    lineHeight: number;
    weight: "400" | "500";
  };
  small: {
    size: number;
    lineHeight: number;
    weight: "400";
  };
}

export interface AppTheme {
  colors: ThemeColors;
  typography: ThemeTypography;
  textVariants: {
    heading1: ReturnType<typeof css>;
    heading2: ReturnType<typeof css>;
    body: ReturnType<typeof css>;
    small: ReturnType<typeof css>;
  };
}

const baseTypography: ThemeTypography = {
  heading1: { size: 24, lineHeight: 32, weight: "700" },
  heading2: { size: 20, lineHeight: 28, weight: "600" },
  body: { size: 16, lineHeight: 22, weight: "400" },
  small: { size: 13, lineHeight: 18, weight: "400" },
};

export const lightTheme: AppTheme = {
  colors: {
    primary: "#4F46E5",
    primaryDark: "#3730A3",
    primaryLight: "#818CF8",
    background: "#F9FAFB",
    surface: "#FFFFFF",
    surfaceElevated: "#E5E7EB",
    text: "#111827",
    textMuted: "#6B7280",
    border: "#D1D5DB",
    danger: "#EF4444",
    success: "#22C55E",
  },
  typography: {
    ...baseTypography,
  },
  textVariants: {
    heading1: css`
      font-size: ${baseTypography.heading1.size}px;
      line-height: ${baseTypography.heading1.lineHeight}px;
      font-weight: ${baseTypography.heading1.weight};
    `,
    heading2: css`
      font-size: ${baseTypography.heading2.size}px;
      line-height: ${baseTypography.heading2.lineHeight}px;
      font-weight: ${baseTypography.heading2.weight};
    `,
    body: css`
      font-size: ${baseTypography.body.size}px;
      line-height: ${baseTypography.body.lineHeight}px;
      font-weight: ${baseTypography.body.weight};
    `,
    small: css`
      font-size: ${baseTypography.small.size}px;
      line-height: ${baseTypography.small.lineHeight}px;
      font-weight: ${baseTypography.small.weight};
    `,
  },
};

export const darkTheme: AppTheme = {
  colors: {
    primary: "#818CF8",
    primaryDark: "#4F46E5",
    primaryLight: "#A5B4FC",
    background: "#050816",
    surface: "#111827",
    surfaceElevated: "#020617",
    text: "#E5E7EB",
    textMuted: "#9CA3AF",
    border: "#1F2937",
    danger: "#F97373",
    success: "#4ADE80",
  },
  typography: {
    ...baseTypography,
  },
  textVariants: {
    heading1: css`
      font-size: ${baseTypography.heading1.size}px;
      line-height: ${baseTypography.heading1.lineHeight}px;
      font-weight: ${baseTypography.heading1.weight};
    `,
    heading2: css`
      font-size: ${baseTypography.heading2.size}px;
      line-height: ${baseTypography.heading2.lineHeight}px;
      font-weight: ${baseTypography.heading2.weight};
    `,
    body: css`
      font-size: ${baseTypography.body.size}px;
      line-height: ${baseTypography.body.lineHeight}px;
      font-weight: ${baseTypography.body.weight};
    `,
    small: css`
      font-size: ${baseTypography.small.size}px;
      line-height: ${baseTypography.small.lineHeight}px;
      font-weight: ${baseTypography.small.weight};
    `,
  },
};
