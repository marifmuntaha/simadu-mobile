import React from "react";
import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import image1 from '../../images/image-1.png'
import image2 from '../../images/image-2.png'
import Logo from '../../images/logo-1.png'
import Dimension from "../../layout/Dimensions";

const GreetingScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1, flexDirection: "column", alignContent: 'center', backgroundColor: '#F5F5F5'
        }, headerBackground: {
            marginTop: Dimension.screenHeight / -3,
            marginLeft: Dimension.screenWidth / 19.4,
            alignSelf: "center",
            height: Dimension.screenHeight / 1.021359223,
            width: Dimension.screenWidth / 0.5
        }, headerLogo: {
            marginTop: Dimension.screenHeight / -1.7,
            marginLeft: Dimension.screenWidth / 19.4,
            height: Dimension.screenHeight / 21.04,
            width: Dimension.screenWidth / 8.981481481,
        }, headerGreeting: {
            marginLeft: Dimension.screenWidth / 19.4,
        }, headerGreetingTitle: {
            color: "#fff", fontSize: Dimension.screenHeight / 42.08
        }, headerGreetingSubtitle: {
            marginTop: Dimension.screenHeight / -80, color: "#fff", fontSize: Dimension.screenHeight / 21.04
        }, headerImage: {
            marginTop: Dimension.screenHeight / -60,
            marginLeft: Dimension.screenWidth / 4.041666667,
            width: Dimension.screenWidth / 1.94,
            height: Dimension.screenHeight / 4.241935484,
        }, content: {
            marginTop: Dimension.screenHeight / 4.208
        },
        buttonRegister: {
            backgroundColor: "#4CB9E7",
            borderRadius: Dimension.screenWidth / 17.32142857,
            borderWidth: 1,
            borderColor: "white",
            height: Dimension.screenHeight / 15.02857143,
            width: Dimension.screenWidth / 1.2125,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5
        },
        buttonLogin: {
            backgroundColor: "#FFFFFF",
            borderRadius: 28,
            borderWidth: Dimension.screenWidth / 242.5,
            borderColor: "#4CB9E7",
            height: Dimension.screenHeight / 15.02857143,
            width: Dimension.screenWidth / 1.2125,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: Dimension.screenHeight / 52.6,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: Dimension.screenWidth / 242.5,
            elevation: Dimension.screenWidth / 97
        }
    });
    return (<>
            <StatusBar backgroundColor="#4CB9E7"/>
            <View style={styles.container}>
                <Image source={image1} style={styles.headerBackground}/>
                <Image source={Logo} style={styles.headerLogo}/>
                <View style={styles.headerGreeting}>
                    <Text style={styles.headerGreetingTitle}>WELCOME TO</Text>
                    <Text style={styles.headerGreetingSubtitle}>SIMADU</Text>
                </View>
                <Image source={image2} style={styles.headerImage}/>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.buttonRegister}
                        onPress={() => navigation.replace('RegisterScreen')}>
                        <Text style={{fontWeight: 'bold', color: "white", fontSize: 18}}>DAFTAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={() => navigation.replace('LoginScreen')}>
                        <Text style={{fontWeight: 'bold', color: "#4CB9E7", fontSize: 18}}>MASUK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>)
}
export default GreetingScreen