import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobsScreen from '../screens/JobsScreen';
import BookmarksScreen from '../screens/BookmarksScreen';
import JobDetailScreen from '../screens/JobDetailScreen';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';
import { styles } from '../constants/styles';
import { RootStackParamList } from '../types/navigation';

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator<RootStackParamList>();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarIcon: ({ focused, size }) => {
                    const iconName =
                        route.name === 'Jobs'
                            ? focused
                                ? 'briefcase'
                                : 'briefcase-outline'
                            : focused
                                ? 'bookmark'
                                : 'bookmark-outline';

                    return <Ionicons name={iconName} size={size} color={Colors.icon} />;
                },
            })}
        >
            <Tab.Screen name="Jobs" component={JobsScreen} />
            <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
        </Tab.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="HomeTabs" component={TabNavigator} />
            <RootStack.Screen name="JobDetail" component={JobDetailScreen} />
        </RootStack.Navigator>
    );
};

export default AppNavigator;
