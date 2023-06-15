import React from "react";
import { Image, View, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({item:{nome, imagem}}){
    return  <View key={nome} style={estilos.item}>
                        <Image source={imagem}/>
                        <Texto style={estilos.nome}>{nome}</Texto>
            </View>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        padding: 16,
        alignItems: "center",
    },
    nome: {
        fontSize: 16,
        lineHeight: 32,
        marginLeft: 11,
    }
})