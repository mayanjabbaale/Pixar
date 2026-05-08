import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Tabs } from 'expo-router'
import { House, MessageCircleMore, Plus, Search, User } from 'lucide-react-native'

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 80, // Slightly taller bar gives more room to move up
                    backgroundColor: '#ffffff',
                    borderTopWidth: 1,
                    borderTopColor: '#ffffff',
                    paddingHorizontal: '10%',
                    paddingTop: 15,
                },
                tabBarItemStyle: {
                    // Negative margin pulls the entire touchable area upward
                    marginTop: -10,
                    padding: 20,
                    marginHorizontal: -5,
                },
                tabBarIconStyle: {
                    // Or move just the icon itself upward
                    transform: [{ translateY: -10 }],
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'red',
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({focused}) => (
                        <View className='pb-8 '>
                            <House size={28} color={'black'} />
                        </View>
                    )
                }} />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    tabBarIcon: () => (
                        <View className='pb-8'>
                            <Search size={28} />
                        </View>
                    )
                }} />
            <Tabs.Screen
                name='create'
                options={{
                    title: 'Create',
                    tabBarIcon: () => (
                           <View className='pb-8'>
                            <Plus size={35} />
                        </View>
                    )
                }} />
            <Tabs.Screen
                name='message'
                options={{
                    title: 'Messages',
                    tabBarIcon: () => (
                           <View className='pb-8'>
                            <MessageCircleMore size={28} />
                        </View>
                    )
                }} />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: () => (
                           <View className='pb-8'>
                            <User size={28} />
                        </View>
                    )
                }} />
        </Tabs>
    )
}

export default TabsLayout