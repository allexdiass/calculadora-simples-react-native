import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './componentes/Botao'
import Display from './componentes/Display'

export default class App extends Component {

  state = {
    displayValue: '0'
  }

  addDigito = n => {
    this.setState({ displayValue: n })
  }

  limpaMemoria = () => {
    this.setState({ displayValue = '0'})
  }

  setOperaocao = oracao => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.botoes}>
          <Botao label='AC' tresPosicoes onClick={this.limpaMemoria}/>
          {/** colocamos assim e nao igual acima porque nesse caso precisamos passar parametros */}
          <Botao label='/' operacao onClick={this.setOperaocao}/>
          <Botao label='7' onClick={this.addDigito}/>
          <Botao label='8' onClick={this.addDigito}/>
          <Botao label='9' onClick={this.addDigito}/>
          <Botao label='*' operacao onClick={this.setOperaocao}/>
          <Botao label='4' onClick={this.addDigito}/>
          <Botao label='5' onClick={this.addDigito}/>
          <Botao label='6' onClick={this.addDigito}/>
          <Botao label='-' operacao onClick={this.setOperaocao}/>
          <Botao label='1' onClick={this.addDigito}/>
          <Botao label='2' onClick={this.addDigito}/>
          <Botao label='3' onClick={this.addDigito}/>
          <Botao label='+' operacao onClick={this.setOperaocao}/>
          <Botao label='0' duasPosicoes onClick={this.addDigito}/>
          <Botao label='.' onClick={this.addDigito}/>
          <Botao label='=' operacao onClick={this.setOperaocao}/>
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
