import React from "react";
import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import image1 from '../../images/image-1.png'
import image2 from '../../images/image-2.png'
import Logo from '../../images/logo-1.png'

const LoginScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            alignContent: 'center',
            backgroundColor: '#F5F5F5'
        },
    });
    return (
        <>
            <StatusBar backgroundColor="#4CB9E7"/>
            <View style={styles.container}>
                <Image source={image1} style={{
                    marginTop: -375,
                    marginLeft: -230,
                    height: "100%",
                    width: "200%"
                }}/>
                <Image source={Logo} style={{
                    marginTop: -600,
                    marginLeft: 25,
                    height: "5%",
                    width: "11%",
                }}/>
                <View style={{
                    marginLeft: 25,
                }}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 25
                    }}>WELCOME TO</Text>
                    <Text style={{
                        marginTop: -20,
                        color: "#fff",
                        fontSize: 50
                    }}>SIMADU</Text>
                </View>
                <Image source={image2} style={{
                    marginTop: -11,
                    marginLeft: 120,
                    width: '50%',
                    height: '25%',
                }}/>
                <View style={{
                    marginTop: 250
                }}>
                    <TouchableOpacity style={{
                        backgroundColor:"#4CB9E7",
                        borderRadius:28,
                        borderWidth: 1,
                        borderColor: "white",
                        height:70,
                        width: 400,
                        alignSelf: "center",
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop:20,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 5

                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color:"white",
                            fontSize:18
                        }}>DAFTAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor:"#FFFFFF",
                        borderRadius:28,
                        borderWidth: 2,
                        borderColor: "#4CB9E7",
                        height:70,
                        width: 400,
                        alignSelf: "center",
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop:20,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 5
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color:"#4CB9E7",
                            fontSize:18
                        }}>MASUK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
export default LoginScreen