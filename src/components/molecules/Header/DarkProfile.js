import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DMDoctor11} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

export default function DarkProfile() {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" />
      <View style={styles.content}>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.desc}>Dokter Anak</Text>
      </View>
      <Image source={DMDoctor11} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    marginTop: 6,
    textAlign: 'center',
    color: colors.text.subTitle,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
