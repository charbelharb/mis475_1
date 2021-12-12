import {Button, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";

const MainComponent = ({styles,landingTitle, mainImage}: IMainComponentParameter) => {
    const [dirtyText, setDirtyText] = useState(false)
    const [mainTitle, setMainTitle] = useState(landingTitle)
    const [image,setImage] = useState<mainImage>(mainImage)
    const handleMainButtonClick = () => {
        console.log(dirtyText)
        if(dirtyText)
        {
            setImage(mainImage)
            setMainTitle(landingTitle)
            setDirtyText(false)

        }
        else{
            setImage({ uri: 'https://www.redwolf.in/image/cache/catalog/artwork-Images/mens/matrix-there-is-no-spoon-artwork-india-700x700.png' })
            setMainTitle("Or Is There?")
            setDirtyText(true)
        }

    }
   return(
       <>
           <SafeAreaView style={styles.container}>
                  <View style={styles.container}>
                      <ImageBackground source={image} resizeMode="cover" style={mainStyles.image}>
                          <Pressable onPress={handleMainButtonClick}>
                              <Text style={mainStyles.text}>{mainTitle}</Text>
                          </Pressable>
                      </ImageBackground>
                      <StatusBar style="auto" />
                  </View>
           </SafeAreaView>
       </>
   )
}
const mainStyles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: '#499a3a',
        fontSize: 18,
        lineHeight: 54,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
        marginBottom: 20
    },
});


export default MainComponent;
