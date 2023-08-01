import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Topo from './componentes/Topo.js';
import Descricao from './componentes/Descricao.js';
import Item from './componentes/Item.js';
import Texto from '../../componentes/Texto.js';

export default function Cesta({topo, detalhes, itens}){
    // return <ScrollView>
    //     <Topo {...topo}/>
    //     <Descricao {...detalhes}/> 
    //     <Itens {...itens} />
    // </ScrollView>
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({nome})=>{nome}}
            ListHeaderComponent={()=>{
                return <>
                    <Topo {...topo}/>
                    <Descricao {...detalhes}/>
                    <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})