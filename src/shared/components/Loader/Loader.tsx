import { animations } from 'assets/animations';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import { TViewStyle } from 'shared/types';
import { AnimatedView } from '../AnimatedView';


export const Loader = ({style}: TViewStyle) => {
  return (
    <AnimatedView
    containerStyle={style}
    animation={animations.loadingAnimation}
  />
  );
};


const styles = StyleSheet.create({
  container: {}
});
