import React from "react"

import { Text, View, Image } from "react-native"

import IllustrationImg from "../../assets/illustration.png"
import { ButtonIcon } from "../../components/ButtonIcon"

import { styles } from "./styles"

export const SignIn = () => {

  return (
    <View
      style={styles.container}
    >
      <Image
        resizeMode="stretch"
        source={IllustrationImg}
        style={styles.image}
      />

      <View
        style={styles.content}
      >
        <Text
          style={styles.title}
        >
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text
          style={styles.subtitle}
        >
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon>
          Entrar com Discord
        </ButtonIcon>
      </View>
    </View>
  )
}