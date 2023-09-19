import React, {ReactNode} from 'react';
import { Pressable, View, Text, StyleSheet, Image} from 'react-native';


interface FlatButton {
   children: ReactNode;
   onPress: () => void;
}
export function FlatButton({children, onPress}: FlatButton) {
   return (
      <Pressable onPress={onPress}>
         <View style={styles.flatButtonContainer}>
            <Text style={styles.text}>{children}</Text>
            <Image style={styles.image} source={require('../assets/images/Vector.png')}/>
         </View>
      </Pressable>
      )
}

const styles = StyleSheet.create({
   flatButtonContainer: {
      margin: 16,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
   },
   text: {
      color: '#000',
      fontWeight: '500',
   },
   image: {
      marginLeft: 8
   }
})