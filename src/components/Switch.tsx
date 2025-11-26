import React, { useEffect, useRef } from "react";
import { Animated, Pressable } from "react-native";
import styledNative, { useTheme } from "styled-components/native";

import type { AppTheme } from "../styles/theme";

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const Track = styledNative(Animated.View)`
  width: 48px;
  height: 24px;
  border-radius: 12px;
  justify-content: center;
  padding: 0px;
`;

const Thumb = styledNative(Animated.View)`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  shadow-color: #000;
  shadow-opacity: 0.15;
  shadow-offset: 0px 2px;
  shadow-radius: 3px;
  elevation: 2;
`;

export default function Switch({ value, onValueChange }: SwitchProps) {
  const theme = useTheme() as AppTheme;
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [animatedValue, value]);

  const trackBackground = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.surfaceElevated, theme.colors.primary],
  });

  const thumbTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 24],
  });

  const handleToggle = () => {
    onValueChange(!value);
  };

  return (
    <Pressable onPress={handleToggle} hitSlop={8}>
      <Track style={{ backgroundColor: trackBackground }}>
        <Thumb
          style={{
            transform: [{ translateX: thumbTranslateX }],
            backgroundColor: value
              ? theme.colors.primaryLight
              : theme.colors.surface,
          }}
        />
      </Track>
    </Pressable>
  );
}
