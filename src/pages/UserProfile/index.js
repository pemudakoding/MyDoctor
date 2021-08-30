import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, List, Profile, Gap} from '../../components';
import {colors} from '../../utils';

export default function UserProfile() {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Gap height={20} />
      <Profile />
      <Gap height={30} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
