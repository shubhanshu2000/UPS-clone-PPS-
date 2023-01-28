import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Customer from '../screens/Customer';
import Orders from '../screens/Orders';
import {TabStackParamList} from '../../type';
import {Icon} from '@rneui/themed';

const TabStack = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigate = useNavigation();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#59C1CC',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Customers') {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? '#59C1CC' : 'gray'}
              />
            );
          } else if (route.name === 'Orders') {
            return (
              <Icon
                name="box"
                type="entypo"
                color={focused ? '#59C1CC' : 'gray'}
              />
            );
          }
        },
      })}>
      <TabStack.Screen name="Customers" component={Customer} />
      <TabStack.Screen name="Orders" component={Orders} />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
