import React from 'react';
import { Pressable, Image} from 'react-native';

interface ExitIconButton {
   onPress: () => void;
}

export function ExitIconButton({onPress}) {
   return (
   <Pressable onPress={onPress}>
     <Image source={require('../assets/Logout.png')}/>
   </Pressable>
   )
}
