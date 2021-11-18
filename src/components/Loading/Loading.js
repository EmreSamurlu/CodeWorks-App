import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <AnimatedLottieView
      source={require('../../assets/btn-loading.json')}
      autoPlay
    />
  );
};

export default Loading;
