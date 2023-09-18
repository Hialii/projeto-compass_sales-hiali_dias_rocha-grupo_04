import React, { ReactElement } from 'react';
import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native';
import { COLORS } from '../constants/COLORS';

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
  isInvalid,
  keyboardType,
  secure,
  onUpdateValue,
  value,
}: InputProps): ReactElement {
  return (
    <View  style={[styles.input, isInvalid && styles.inputInvalid]}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text>
      <TextInput
        style={styles.inputText}
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
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    fontSize: 11,
    color: '#9b9b9b',
  },
  labelInvalid: {
    color: COLORS.error,
  },
  inputText: {
    color: '#000',
  },
  input: {
    boxShadow: 'none',
    height: 64,
    width: 343,
    marginHorizontal: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 8,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
   borderColor: COLORS.error,
   borderWidth: 1,
  },
})