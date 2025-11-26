import PaddingWrapper from "@/src/components/PaddingWrapper";
import Text from "@/src/components/Text";
import styledNative from "styled-components/native";

export default function HomeScreen() {
  return (
    <PaddingWrapper>
      <Title>홈화면</Title>
    </PaddingWrapper>
  );
}

const Title = styledNative(Text)``;
