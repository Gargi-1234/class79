import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, Platform, ImageBackground, Image
        } from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground
                        source={require('../assets/bg_image.png')}
                        style={styles.backgroundImage}>

                    <View style={styles.titleBar}>
                        <Text style={styles.titleText} >ISS Tracker App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard}
                    onPress={()=>{
                        this.props.navigation.navigate("IssLocation")
                    }}
                    >
                        <Image
                        source={require('../assets/iss_icon.png')}
                        style={styles.iconImage}></Image>
                        <Text style={styles.routeText}>Iss Location</Text>
                        <Text style={styles.knowMore}>{"Know more -->"}</Text>
                        <Text style={styles.bgDigit} >1</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.routeCard}
                    onPress={()=>{
                    this.props.navigation.navigate("Meteor")
                    }}
                    >
                        <Image
                         source={require('../assets/meteor_icon.png')}
                         style={styles.iconImage}></Image>
                        <Text style={styles.routeText}>Meteor</Text>
                        <Text style={styles.knowMore}>{"Know more -->"}</Text>
                        <Text style={styles.bgDigit} >2</Text>
                    </TouchableOpacity>
                    </ImageBackground>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: { flex:1 },
   titleBar: { flex: 0.15, 
               justifyContent: "center", 
               alignItems: "center" }, 
   titleText: { fontSize: 40, 
                fontWeight: "bold", 
                color: "blue" },
   droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
   routeCard: { flex: 0.25, 
                marginLeft: 50, 
                marginRight: 50, 
                marginTop: 50, 
                borderRadius: 30, 
                backgroundColor: 'white' },
   routeText: { fontSize: 35, 
                fontWeight: "bold", 
                color: "black", 
                marginTop: 75, 
                paddingLeft: 30 },
    backgroundImage: { flex: 1, 
                       resizeMode: 'cover', },
    iconImage: { position: "absolute", height: 200, width: 200, resizeMode: "contain", right: 20, top: -80 },
    bgDigit: { position: "absolute", color: "rgba(183, 183, 183, 0.5)", fontSize: 150, right: 20, bottom: -15, zIndex: -1 },
    knowMore: { paddingLeft: 30, color: "red", fontSize: 15 },
})