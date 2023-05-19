import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cell = ({title, icon, tintColor, style}) => {
  const showAlert = () => {
    Alert.alert('Touched..');
  };
  return (
    <TouchableOpacity style={[styles.cell, style]} onPress={showAlert}>
      <View style={[styles.iconContainer, {backgroundColor: tintColor}]}>
        <Ionicons name={icon} size={25} color="white" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    marginStart: 16,
  },
});

export default Cell;
