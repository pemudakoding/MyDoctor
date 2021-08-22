import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DMDoctor1, ICStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function index() {
  return (
    <View style={styles.container}>
      <Image source={DMDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.category}>Pediactrician</Text>
      </View>
      <View style={styles.rate}>
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  rate: {
    flexDirection: 'row',
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
  },
  profile: {
    flex: 1,
  },
});
