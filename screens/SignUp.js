import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput} from 'react-native';
import {colors} from '../config/Constans';
import Button from '../components/Button';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.title}>Create New Account</Text>
          <TextInput style={styles.input} placeholder="Enter your name" />
          <TextInput style={styles.input} placeholder="Enter your email" />
          <TextInput style={styles.input} placeholder="Enter your password" />
          <View style={styles.buttonsContainer}>
            <Button name="Sign In" varients="secondary" />
            <Button name="Sign Up" varients="primary" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  content: {
    padding: 32,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: '800',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  buttonContainer: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SignUp;
