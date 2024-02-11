import React from 'react';
import { View, Image } from 'react-native';
import { PageLayout } from '../AppLayout';
import { IMAGES, styles } from '../constants';

export default function SplashScreenComponent() {
  /*const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [200, 0]);
    return {
      transform: [{ translateY }],
    };
  });*/

  return (
    <PageLayout>
      <View style={styles.centerImage}>
        <Image source={IMAGES.LOGO} />
      </View>
    </PageLayout>
  );
}
