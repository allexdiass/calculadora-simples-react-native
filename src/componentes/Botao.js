import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
    botao: {
        fontSize: 35,
        // pega a largura da tela e divide por 4
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    }, 
    botaoOperacao: {
       color: '#fff',
       backgroundColor: '#fa8231',
    }, 
    botaoDuasPosicoes: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    botaoTresPosicoes: {
        width: (Dimensions.get('window').width / 4) * 3
    }

})

export default props => {
    // colocando um estilo dentro do array
    const stylesBotao = [styles.botao]
    if (props.duasPosicoes) {
        stylesBotao.push(styles.botaoDuasPosicoes)
    }
    if (props.tresPosicoes) {
        stylesBotao.push(styles.botaoTresPosicoes)
    }
    if (props.operacao) {
        stylesBotao.push(styles.botaoOperacao)
    }
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesBotao}>{props.label}</Text>
        </TouchableHighlight>
    )
}