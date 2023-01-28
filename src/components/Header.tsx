import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {View, Button} from 'react-native';

const Header = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center h-full">
        <Text className="text-black text-2xl mb-2">Header Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;
