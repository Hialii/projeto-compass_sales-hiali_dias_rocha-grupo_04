import React, {ReactNode} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/COLORS';

interface Button {
   children: ReactNode;
   onPress: () => void;
}
export function Button({children, onPress}: Button) {
   return (
   <Pressable style={styles.button} onPress={onPress}>
      <View>
         <Text style={styles.buttonText}>{children}</Text>
      </View>
   </Pressable>
   )
}


const styles = StyleSheet.create({
   buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
   },
   button: {
      height: 50,
      width: 345,
      margin: 16,
      backgroundColor: COLORS.red,
      borderRadius: 25,
      paddingVertical: 14,
      paddingHorizontal: 48,
   },

})