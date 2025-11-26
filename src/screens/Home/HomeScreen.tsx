import styledNative from "styled-components/native";

export default function HomeScreen() {
  return (
    <Container>
      <Title>홈 화면</Title>
      <Subtitle>styled-components로 작성된 React Native UI 예제</Subtitle>
    </Container>
  );
}

const Container = styledNative.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 24px;
`;

const Title = styledNative.Text`
  font-size: 24px;
  font-weight: 700;
  color: #111111;
`;

const Subtitle = styledNative.Text`
  margin-top: 8px;
  font-size: 16px;
  color: #555555;
  text-align: center;
`;
