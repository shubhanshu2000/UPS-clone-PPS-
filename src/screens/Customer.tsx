import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CustomerNavigationTypeProp} from '../types/type';
import {Input} from '@rneui/themed';

const size = 16;

const Customer = () => {
  const [input, setInput] = useState<string>('');
  const navigation = useNavigation<CustomerNavigationTypeProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView className="bg-[#59C1CC] ">
      <Image
        source={{uri: 'https://links.papareact.com/3jc'}}
        className="h-64 w-full "
      />
      <Input
        placeholder="Search by customer"
        value={input}
        onChangeText={text => setInput(text)}
        containerStyle={styles.input}
      />
    </ScrollView>
  );
};

export default Customer;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 0,
    paddingHorizontal: 28,
  },
});
