import { useTranslation } from "react-i18next";
import PaddingWrapper from "../../components/PaddingWrapper";
import Text from "../../components/Text";

export default function HomeScreen() {
  const { t } = useTranslation("home");

  return (
    <PaddingWrapper>
      <Text variant="heading1">{t("title")}</Text>
    </PaddingWrapper>
  );
}
