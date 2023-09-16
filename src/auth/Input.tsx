import React, { ReactElement } from 'react';
import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native';

interface InputProps {
  label: string;
  keyboardType?: TextInputProps['keyboardType'];
  secure?: boolean;
  onUpdateValue: (text: string) => void;
  value: string;
  isInvalid?: boolean;
}

export function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
}: InputProps): ReactElement {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.text}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000'
  }
})