import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './componentes/Botao'
import Display from './componentes/Display'

// criando um estado inicial para a calculadora
const estadoInicial = {
  displayValue: '0',
  limpaDisplay: false,
  operacao: null,
  valores: [0, 0],
  atual: 0
}

export default class App extends Component {

  state = {...estadoInicial }

  addDigito = n => {


    // verifica se o numero do display é 0 ou se o estado limpaDisplay esta true
    const limpaDisplay = this.state.displayValue === '0'
      || this.state.limpaDisplay
        // ve se ja tem um . no display
    if (n === '.' && !limpaDisplay && this.state.displayValue.includes('.')) {
      return
    }
    const valorAtual = limpaDisplay ? '' : this.state.displayValue
    const displayValue = valorAtual + n
    this.setState({ displayValue, limpaDisplay: false })

    // quer dizer que é um valor valido
    if (n !== '.') {
      const novoValor = parseFloat(displayValue)
      // clonando o array this.state.valores
      const valores = [...this.state.valores]
      valores[this.state.atual] = novoValor
      this.setState({ valores })
    }
  }

  limpaMemoria = () => {
    // volta o componente para o estado inicial
    this.setState({ ...estadoInicial })
  }

  setOperacao = operacao => {
    if (this.state.atual === 0) {
      this.setState({ operacao, atual: 1, limpaDisplay: true})
    } else {
      const igual = operacao === '='
      const valores = [...this.state.valores]
      try  {
        // o eval avalia a expressao passada e realiza a operacao
        // exemplo:
        // 2 + 2

        //usa a operacao que ja estava setada no estado
        valores[0] = 
          eval(`${valores[0]} ${this.state.operacao} ${valores[1]}`)
      } catch {
        valores[0] = this.state.valores[0]
      }

      // atualiza a proxima operacao
      valores[1] = 0
      this.setState({
        // garantindo que seja uma string
        displayValue: `${valores[0]}`,
        operacao: igual ? null : operacao,
        atual: igual ? 0 : 1,
        // nao limpa o display quando clica em =
        limpaDisplay: !igual,
        valores
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.botoes}>
          <Botao label='AC' tresPosicoes onClick={this.limpaMemoria}/>
          {/** colocamos assim e nao igual acima porque nesse caso precisamos passar parametros */}
          <Botao label='/' operacao onClick={this.setOperacao}/>
          <Botao label='7' onClick={this.addDigito}/>
          <Botao label='8' onClick={this.addDigito}/>
          <Botao label='9' onClick={this.addDigito}/>
          <Botao label='*' operacao onClick={this.setOperacao}/>
          <Botao label='4' onClick={this.addDigito}/>
          <Botao label='5' onClick={this.addDigito}/>
          <Botao label='6' onClick={this.addDigito}/>
          <Botao label='-' operacao onClick={this.setOperacao}/>
          <Botao label='1' onClick={this.addDigito}/>
          <Botao label='2' onClick={this.addDigito}/>
          <Botao label='3' onClick={this.addDigito}/>
          <Botao label='+' operacao onClick={this.setOperacao}/>
          <Botao label='0' duasPosicoes onClick={this.addDigito}/>
          <Botao label='.' onClick={this.addDigito}/>
          <Botao label='=' operacao onClick={this.setOperacao}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botoes: {
    flexDirection: 'row',
    // wrap permite quebra de linha para os componentes
    flexWrap: 'wrap',
  }
});
