import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DMDoctor1} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DMDoctor1}
        name="Alexander Janie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={DMDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DMDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DMDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
