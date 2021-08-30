import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DMDoctor2, DMDoctor3, DMDoctor1} from '../../assets/dummy';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

export default function Messages() {
  const [doctors] = useState([
    {
      id: 1,
      profile: DMDoctor1,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: DMDoctor3,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: DMDoctor2,
      name: 'John MCParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => {
          return (
            <List
              key={`id-${doctor.id}`}
              name={doctor.name}
              desc={doctor.desc}
              profile={doctor.profile}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
