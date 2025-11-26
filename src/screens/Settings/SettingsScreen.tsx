import React from "react";
import { useTranslation } from "react-i18next";
import styledNative from "styled-components/native";

import Button from "../../components/Button";
import PaddingWrapper from "../../components/PaddingWrapper";
import Switch from "../../components/Switch";
import Text from "../../components/Text";
import useLangStore from "../../store/lang";
import useThemeStore from "../../store/theme";
import type { AppTheme } from "../../styles/theme";

export default function SettingsScreen() {
  const mode = useThemeStore((state) => state.mode);
  const setMode = useThemeStore((state) => state.setMode);
  const lang = useLangStore((state) => state.lang);
  const setLang = useLangStore((state) => state.setLang);
  const { t } = useTranslation("settings");

  const isDark = mode === "dark";

  const handleToggle = (value: boolean) => {
    setMode(value ? "dark" : "light");
  };

  const handleChangeLanguage = (langCode: "ko" | "en") => {
    setLang(langCode);
  };

  return (
    <PaddingWrapper>
      <Text variant="heading1">{t("title")}</Text>
      <Settings>
        <Row>
          <Text variant="body">{t("dark_mode")}</Text>
          <Switch value={isDark} onValueChange={handleToggle} />
        </Row>
        <Row>
          <Text variant="body">{t("language")}</Text>
          <LanguageSelector>
            <Button
              label={t("language_ko")}
              size="sm"
              variant={lang === "ko" ? "primary" : "ghost"}
              onPress={() => handleChangeLanguage("ko")}
            />
            <Button
              label={t("language_en")}
              size="sm"
              variant={lang === "en" ? "primary" : "ghost"}
              onPress={() => handleChangeLanguage("en")}
            />
          </LanguageSelector>
        </Row>
      </Settings>
    </PaddingWrapper>
  );
}

const Settings = styledNative.View`
  margin-top: 20px;
  gap: 10px;
`;

const Row = styledNative.View`
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
