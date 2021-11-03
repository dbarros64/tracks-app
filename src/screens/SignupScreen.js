import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);


    return (
        <View style={styles.containerStyle}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign up for Tracker'
                errorMessage={state.errorMessage}
                submitButtonText='Sign up'
                onSubmit={({ email, password }) => signup({ email, password })}
            />
            <NavLink 
                routeName='Signin'
                text='Already have an account? Sign in here'
            />
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 300
    }
    
});


export default SignupScreen;