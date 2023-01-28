import React from 'react';
import {Button, SafeAreaView, View, Text} from 'react-native';

const Home = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center h-full">
        <Text className="text-black text-2xl mb-2">Home Screen</Text>
        <Button
          title="Go to Header"
          onPress={() => navigation.navigate('Header')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
