import React from "react";
import { useTranslation } from "react-i18next";
import styledNative from "styled-components/native";

import PaddingWrapper from "../../components/PaddingWrapper";
import Switch from "../../components/Switch";
import Text from "../../components/Text";
import useThemeStore from "../../store/theme";
import type { AppTheme } from "../../styles/theme";

export default function SettingsScreen() {
  const mode = useThemeStore((state) => state.mode);
  const setMode = useThemeStore((state) => state.setMode);
  const { t, i18n } = useTranslation();

  const isDark = mode === "dark";

  const handleToggle = (value: boolean) => {
    setMode(value ? "dark" : "light");
  };

  const currentLang = i18n.language.startsWith("ko") ? "ko" : "en";

  const handleChangeLanguage = (lang: "ko" | "en") => {
    i18n.changeLanguage(lang);
  };

  return (
    <PaddingWrapper>
      <Text variant="heading1">{t("settings_title")}</Text>
      <Row>
        <Text variant="body">{t("dark_mode")}</Text>
        <Switch value={isDark} onValueChange={handleToggle} />
      </Row>
      <Row>
        <Text variant="body">{t("language")}</Text>
        <LanguageSelector>
          <LanguageButton
            active={currentLang === "ko"}
            onPress={() => handleChangeLanguage("ko")}
          >
            <LanguageText active={currentLang === "ko"}>
              {t("language_ko")}
            </LanguageText>
          </LanguageButton>
          <LanguageButton
            active={currentLang === "en"}
            onPress={() => handleChangeLanguage("en")}
          >
            <LanguageText active={currentLang === "en"}>
              {t("language_en")}
            </LanguageText>
          </LanguageButton>
        </LanguageSelector>
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

const LanguageSelector = styledNative.View`
  flex-direction: row;
  gap: 8px;
`;

const LanguageButton = styledNative.TouchableOpacity<{ active: boolean }>`
  padding: 6px 12px;
  border-radius: 999px;
  background-color: ${({
    active,
    theme,
  }: {
    active: boolean;
    theme: AppTheme;
  }) => (active ? theme.colors.primary : theme.colors.surfaceElevated)};
`;

const LanguageText = styledNative(Text)<{ active: boolean }>`
  font-size: 13px;
  color: ${({ active, theme }: { active: boolean; theme: AppTheme }) =>
    active ? theme.colors.surface : theme.colors.textMuted};
`;
