import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestComponent from './src/components/TestComponent';
import Login from './src/components/Login/Login';
import Dashboard from './src/components/Dashboard/Dashboard';


class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="TestComponent" component={TestComponent} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation, route }) => {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('TestComponent', { name: 'Jane'})
            }
        />
    );
};
const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

export default App;