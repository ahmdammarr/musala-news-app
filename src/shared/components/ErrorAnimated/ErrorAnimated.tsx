import { animations } from 'assets/animations';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import { TViewStyle } from 'shared/types';
import { AnimatedView } from '../AnimatedView';


export const ErrorAnimated = ({style}: TViewStyle) => {
  return (
    <AnimatedView
    containerStyle={style}
    animation={animations.errorAnimatoin}
  />
  );
};


const styles = StyleSheet.create({
  container: {}
});
