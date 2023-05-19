import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const contactRow = ({name, subtitle, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.row, style]} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarLabel}>
          {name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('')}
        </Text>
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Ionicons name="arrow-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    backgroundColor: '#2196f3',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLabel: {
    fontSize: 20,
    color: '#fff',
  },
  textsContainer: {
    marginStart: 16,
    flex: 1,
  },
  name: {
    fontSize: 16,
  },
  subtitle: {
    marginTop: 3,
    color: '#565656',
  },
});

export default contactRow;
