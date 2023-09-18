import React, {ReactNode} from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';


interface FlatButton {
   children: ReactNode;
   onPress: () => void;
}
export function FlatButton({children, onPress}: FlatButton) {
   return (
      <Pressable onPress={onPress}>
         <View style={styles.flatButtonContainer}>
            <Text style={styles.text}>{children}</Text>
         </View>
      </Pressable>
      )
}

const styles = StyleSheet.create({
   flatButtonContainer: {
      margin: 16,
   },
   text: {
      color: '#000',
      fontWeight: '500',
   }
})