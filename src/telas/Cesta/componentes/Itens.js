import React from "react";
import { Image, View, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Itens({titulo, lista}){
    return <> 
        <Texto style={estilos.titulo}>{titulo}</Texto>
        {/*Exibe os itens da lista com o MAP do JS*/}
        {lista.map(({nome,imagem})=>{
            return <View key={nome} style={estilos.item}>
                        <Image source={imagem}/>
                        <Texto style={estilos.nome}>{nome}</Texto>
            </View>
        })}
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
    },
    nome: {
        fontSize: 16,
        lineHeight: 32,
        marginLeft: 11,
    }
})