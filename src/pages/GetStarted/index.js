import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';

export default function GetStarted() {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16} />
        <Button title="Sign In" type="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
});
