import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


interface Title {
   children: string;
}
export function Title({children}: Title) {
   return (
         <View style={styles.titleContainer}>
            <Text style={styles.text}>{children}</Text>
         </View>
      )
}

const styles = StyleSheet.create({
   titleContainer: {
      margin: 14,
      marginBottom: 58,
   },
   text: {
      fontSize: 34,
      color: '#000',
      fontWeight: 'bold',
   }
})