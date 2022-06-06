import React, { Component } from 'react';
import { Text, View } from "react-native";

import React, { Component } from 'react'
import { View } from './Themed';

export default class ComposantClass extends Component {
    state = {
        texte : "Je suis du texte dans le state",
        chiffre:3,
        tableau: [ "foot", "basket", "tennis"],
        user: {
            nom:"Mike",
            role:"Admin",
            IsLogged: true

        }
    }
    constructor(props){
    super(props)
}
  render() {
    //   destructuration
      const{ texte, chiffre, tableau, user} =this.state
    return (
        <View>
        <Text>{ texte}</Text> 
        <Text>{ chiffre}</Text>
        <Text>{ this.state.tableau}</Text>
        </View>
    )
  }
}
