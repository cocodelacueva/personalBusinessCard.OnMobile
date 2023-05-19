import React, { useContext } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//pages
import HomeScreen from './homeScreen';
import ConfigurationScreen from './configurationScreen';
import LoginScreen from './loginScreen';
import ValidationScreen from './validationScreen';
import ShareScreen from './shareScreen';

//context
import AuthContext from '../context/authContext';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {

    const { session } = useContext(AuthContext);
    
    return (
        <Stack.Navigator>
            {session.loading ? (
                <Stack.Screen
                    name="Validating"
                    component={ValidationScreen}
                    options={{
                        title: 'Validation',
                        headerStyle: {
                            backgroundColor: '#f26d36',
                        },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            ) : null }
            
            {session.data?.token ? (
                <>
                    <Stack.Screen 
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'My personal Cards',
                            headerStyle: {
                            backgroundColor: '#f26d36',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            },
                        }}
                    />
                    <Stack.Screen 
                        name="ShareCard"
                        component={ShareScreen}
                        options={{
                            title: 'Share this card',
                            headerStyle: {
                            backgroundColor: '#f26d36',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            },
                        }}
                    />
                    <Stack.Screen 
                        name="Configuration"
                        component={ConfigurationScreen}
                        options={{
                            title: 'Configurations',
                            headerStyle: {
                            backgroundColor: '#f26d36',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            },
                        }}
                    />
                </>
                ) : (
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            title: 'Login First',
                            headerStyle: {
                                backgroundColor: '#f26d36',
                                },
                                headerTintColor: '#fff',
                                headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}
                    />
                )}
        </Stack.Navigator>
    );
}

export default RootNavigation;