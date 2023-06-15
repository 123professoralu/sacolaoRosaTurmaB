import React from "react";
import { Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

import logo from '../../assets/logo.png';
import Texto from '../componentes/Texto';
import imgSacolao from '../../assets/imagem_sacolao.jpg'

const width = Dimensions.get('screen').width;

export default function Sacolao(){
    return <ScrollView style={estilos.sacolao}>
        <Image source={logo} style={estilos.logo}/>
        <Texto style={estilos.textoSacolao}>
            O Sacolão da Rosa está no mercado de frutas, verduras e legumes desde 2000 e trás sempre os melhores produtos direto dos produtores.
        </Texto>
        <Texto style={estilos.textoSacolao}>
            Estamos localizados em São Caetano do Sul, na rua Boa Vista, nº 123.
        </Texto>
        <Image source={imgSacolao} style={estilos.imgSacolao}/>
    </ScrollView>;
}

const estilos = StyleSheet.create({
    logo: {
        alignSelf: "center",
        marginBottom: 20,
        borderRadius: 4,
    },
    imgSacolao: {
        width: "100%",
        height: 1024/680 * width,
    },
    sacolao: {
        backgroundColor: "pink",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    textoSacolao: {
        fontSize: 16,
        lineHeight: 26,
        marginBottom: 10,
    }
})