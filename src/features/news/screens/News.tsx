import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from 'shared/components/ThemedText'
import { ThemedView } from 'shared/components/ThemedView'

export const News = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>News</ThemedText>
    </ThemedView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})