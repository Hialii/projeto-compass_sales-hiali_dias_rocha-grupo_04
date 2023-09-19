import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


interface TextGuide{
   children: string;
}
export function TextGuide({children}: TextGuide) {
   return (
         <View>
            <Text style={styles.text}>{children}</Text>
         </View>
      )
}


const styles = StyleSheet.create({
   text: {
      fontFamily: 'Roboto',
      color: '#000',
      lineHeight: 20,
      fontSize: 14,
      margin: 16,
   }
})