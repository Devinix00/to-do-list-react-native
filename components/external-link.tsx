import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
import { Linking, Pressable, type PressableProps } from 'react-native';

type Props = PressableProps & { href: string };

export function ExternalLink({ href, onPress, ...rest }: Props) {
  const openLink = async () => {
    if (process.env.EXPO_OS !== 'web') {
      await openBrowserAsync(href, {
        presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
      });
      return;
    }

    await Linking.openURL(href);
  };

  return (
    <Pressable
      {...rest}
      onPress={async (event) => {
        await openLink();
        onPress?.(event);
      }}
    />
  );
}
