import React, { useContext } from 'react';
import { Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons'




const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style={styles.containerStyle}>Account</Text>
        <Spacer>
            <Button title='Sign out' 
                onPress={signout} 
            />
        </Spacer>
    </SafeAreaView>
    )
};


AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name='gear' size={20} />
}


const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 30,
        fontSize: 42,
        justifyContent: 'center'
    }
});


export default AccountScreen;