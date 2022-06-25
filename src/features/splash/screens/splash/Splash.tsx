import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from 'assets/colors'
import { scaleFontSize } from 'utils/scaling/scaling'
import { AnimatedLogo } from 'features/splash/component/AnimatedLogo'

export const Splash = () => {
  return (
    <View style={styles.container}>
       <AnimatedLogo />
      <Text style={styles.title}>World News</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.shared.brand
    },
    title:{
        fontSize:scaleFontSize(20),
        fontWeight:'900',
        color: colors.dark.text
    }
})