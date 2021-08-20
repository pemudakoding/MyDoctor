import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Link, Button, Gap} from '../../components';

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24}/>
      <Input label="Password" />
      <Link title="Forgot My Password" size={12}/>
      <Gap height={40}/>
      <Button title="Sign In" type="primary" />
      <Gap height={30}/>
      <Link title="Create New Account" size={16} align='center' />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginVertical: 40,
    maxWidth: 153,
  },
});
