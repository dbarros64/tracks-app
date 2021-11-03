import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';



const SigninScreen = () => {
    const {state, signin, clearErrorMessage } = useContext(Context);
    return (
        <View style={styles.containerStyle}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign in to your account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign in"
            />
            <NavLink 
                text="Don't have an account? Sign up here instead"
                routeName="Signup"
            />
        </View>
    )
};


SigninScreen.navigationOptions = () => {
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


export default SigninScreen;