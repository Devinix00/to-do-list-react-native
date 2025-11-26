import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";

import type { AppTheme } from "../styles/theme";

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

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
    outputRange: [2, 20],
  });

  const handleToggle = () => {
    onValueChange(!value);
  };

  return (
    <Pressable onPress={handleToggle} hitSlop={8}>
      <Animated.View
        style={[styles.track, { backgroundColor: trackBackground }]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX: thumbTranslateX }],
              backgroundColor: theme.colors.surface,
            },
          ]}
        />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 46,
    height: 28,
    borderRadius: 16,
    paddingHorizontal: 2,
    justifyContent: "center",
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
});
