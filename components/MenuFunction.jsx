import { UserInterfaceIdiom } from "expo-constants"
import { useState } from "react"
import { Text, View, Button, StyleSheet, Image } from "react-native"

const MenuFunction = () => {
    const [ text, useText] = useState("je suis le texte")
    const [show, setShow] = useState(false)

    const hello = () => {
        alert ( " j'ai cliqué sur le bouton")
    }
  return (
    <View>
     <Image style="" source={{}}></Image>
      <Text>
        {text}
      </Text>
      <Button
        title="click me"
        onPress={ hello} />
    </View>
  )
}
 const styleMenu = StyleSheet.create({
     img : {
    with : 50,
    height : 50
     }
        
 })
export default MenuFunction