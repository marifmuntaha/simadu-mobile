import React from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Image3 from "../../images/image-3.png"
import Icon1 from "../../images/icon/Icon1.png"
import Icon2 from "../../images/icon/Icon2.png"
import Dimension from "../../layout/Dimensions";

const RegisterScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            alignContent: 'center',
            backgroundColor: '#F5F5F5'
        },
        header: {
            height: 310,
            marginTop: -60
        },
        headerImage: {
            alignSelf: "center",
            height: 310
        },
        headerImageGreeting: {
            marginTop: -150,
            alignSelf: 'center',
            alignContent: 'center'
        },
        headerImageGreetingTitle: {
            color: "#fff",
            fontWeight: 'bold',
            fontSize: 52
        },
        headerImageGreetingSubtitle: {
            color: "#fff",
            fontSize: 18
        },
        link: {
            flexDirection: 'row',
            alignContent: "center",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "#fff",
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 0,
            elevation: 10,
        },
        linkActive: {
            width: "50%",
            height: 70,
            borderBottomWidth: 3,
            borderBottomColor: "#4CB9E7",
            justifyContent: "center"
        },
        linkNonActive: {
            width: "50%",
            height: 70,
            justifyContent: "center"
        },
        content: {
            width: Dimension.screenWidth / 1.2125,
            marginTop: 40,
            alignSelf: 'center'
        },
        inputText: {
            flex: 1,
            backgroundColor: "#FFFFFF",
            width: "100%",
            height: 70,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            color: "#707070",
            paddingLeft: 50,
            fontSize: 20,
            borderRadius: 12,
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
        }
    });
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={Image3} style={styles.headerImage}/>
                    <View style={styles.headerImageGreeting}>
                        <Text style={styles.headerImageGreetingTitle}>SIMADU</Text>
                        <Text style={styles.headerImageGreetingSubtitle}>Sistem Informasi Madrasah Terpadu</Text>
                    </View>
                </View>
                <View style={styles.link}>
                    <View style={styles.linkActive}>
                        <Text style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color: "#4CB9E7"}}>
                            MASUK
                        </Text>
                    </View>
                    <View style={styles.linkNonActive}>
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: "#4CB9E7",
                            opacity: 0.4
                        }}>
                            PENDAFTARAN
                        </Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={{fontSize: 24}}>Masuk ke Akun anda</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 30
                    }}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Alamat Email"/>
                        <Image source={Icon1} style={{
                            position: 'absolute',
                            height: 25,
                            width: 30,
                            marginLeft: 10
                        }}/>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 30,
                    }}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Kata Sandi"
                        />
                        <Image source={Icon2} style={{
                            position: 'absolute',
                            height: 30,
                            width: 25,
                            marginLeft: 10
                        }}/>
                    </View>
                    <TouchableOpacity
                        style={{
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

                        }}
                        onPress={() => navigation.replace('RegisterScreen')}
                    >
                        <Text style={{
                            fontWeight: 'bold',
                            color: "white",
                            fontSize: 18
                        }}>MASUK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
export default RegisterScreen;