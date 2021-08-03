import React from "react"

import { TouchableOpacity, View, Image, Text } from "react-native"

import DiscordImg from "../../assets/discord.png"

import { styles } from "./styles"

export const ButtonIcon: React.FC = ({ children }) => {
  return (
    <TouchableOpacity
      activeOpacity={.8}
      style={styles.container}
    >
      <View
        style={styles.iconWrapper}
      >
        <Image
          source={DiscordImg}
          style={styles.icon}
        />
      </View>

      <Text
        style={styles.title}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}