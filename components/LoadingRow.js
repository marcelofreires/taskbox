import React, { useState, useEffect } from 'react';
import { Animated, Text, View, Easing, SafeAreaView } from 'react-native';

import { styles } from '../constants/globalStyles';

const GlowView = props => {
  const [glowAnim] = useState(new Animated.Value(0.4));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1300,
          easing: Easing.inOut(Easing.quad),
        }),
        Animated.timing(glowAnim, {
          toValue: 0.4,
        })
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: glowAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const LoadingRow = () => (
  <GlowView>
    <View style={styles.LoadingItem}>
      <View style={styles.GlowCheckbox} />
      <Text style={styles.GlowText}>Loading text example</Text>
    </View>
  </GlowView>
);

export default LoadingRow;
