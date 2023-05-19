import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({name, varients}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor: varients === 'primary' ? 'black' : 'transparent',
          paddingHorizontal: varients === 'primary' ? 16 : 0,
        },
      ]}>
      <Text
        style={[
          styles.buttonLabel,
          {color: varients === 'primary' ? 'white' : 'black'},
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonLabel: {
    fontSize: 18,
  },
});

export default Button;
