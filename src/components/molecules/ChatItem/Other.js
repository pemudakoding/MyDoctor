import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DMDoctor9} from '../../../assets';
import {fonts, colors} from '../../../utils';

export default function Other() {
  return (
    <View style={styles.container}>
      <Image source={DMDoctor9} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Ibu dokter, apa memakan jeruk tiap hari itu buruk ?
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 16,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 8,
  },
});
