import useThemeStore from "@/src/store/theme";
import type { AppTheme } from "@/src/styles/theme";
import styledNative from "styled-components/native";

export default function HomeScreen() {
  const mode = useThemeStore((state) => state.mode);
  const setMode = useThemeStore((state) => state.setMode);

  return (
    <Container>
      <Title>홈 화면</Title>
      <Subtitle>styled-components로 작성된 React Native UI 예제</Subtitle>
      <ToggleButton onPress={() => setMode(mode === "dark" ? "light" : "dark")}>
        <ToggleText>
          현재 모드: {mode === "dark" ? "다크" : "라이트"}
        </ToggleText>
      </ToggleButton>
    </Container>
  );
}

const Container = styledNative.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.background};
  padding: 24px;
`;

const Title = styledNative.Text`
  ${({ theme }: { theme: AppTheme }) => theme.textVariants.heading1};
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.text};
`;

const Subtitle = styledNative.Text`
  margin-top: 8px;
  ${({ theme }: { theme: AppTheme }) => theme.textVariants.body};
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.textMuted};
  text-align: center;
`;

const ToggleButton = styledNative.TouchableOpacity`
  margin-top: 24px;
  padding: 12px 16px;
  border-radius: 999px;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.surface};
`;

const ToggleText = styledNative.Text`
    ${({ theme }: { theme: AppTheme }) => theme.textVariants.small};
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.text};
`;
