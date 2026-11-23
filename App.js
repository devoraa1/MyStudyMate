import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppProvider } from './AppContext';
import TasksTab from './TasksTab';
import AddTaskTab from './AddTaskTab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#2563EB',
            tabBarInactiveTintColor: '#94A3B8',
            tabBarStyle: {
              height: 65,
              paddingBottom: 8,
              paddingTop: 8,
              backgroundColor: '#FFFFFF',
              borderTopColor: '#E2E8F0',
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: 'bold',
            },
          }}
        >
          <Tab.Screen name="My Tasks" component={TasksTab} />
          <Tab.Screen name="Add Task" component={AddTaskTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
