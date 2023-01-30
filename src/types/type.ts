import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  MyModal: {userId: string; name: string};
  Order: {order: any};
};

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

export type CustomerNavigationTypeProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;
