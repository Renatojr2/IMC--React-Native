import React from 'react';
import { View, Text, Slider } from 'react-native';
import {Button} from 'react-native-paper';



import styles from './styles';

export default function Main() {
  const [height, setHeight] = React.useState(0)
  const [weight, setWeight] = React.useState(0)
  const [imc, setImc] = React.useState(0)
  const [estado, setEstado] = React.useState('')
  const [cor, setCor] = React.useState('#aaa')

  function Calcular(){
    const res = Math.ceil(weight /(height * height))
    setImc(res)
    if (res < 18.5 ){
      setEstado('Abaixo do peso')
      setCor('#e74c3c')
      
    } else if(res >= 18.5 && res <= 24.9) {
      setEstado(' Peso Normal')
      setCor('#2ecc71')
      


    } else if(res >= 25 && res <= 29.9) {
      setEstado(' Sobrepeso')
      setCor('#f1c40f')
     

    } else if(res >= 30 && res <= 34.9) {
      setEstado(' Obsidade grau 1')
      setCor('#f1c40f')
     

    } else if(res >= 35 && res <= 39.9) {
      setEstado(' Obsidade grau 2')
      setCor('#f1c40f')
     

    } else {
      setEstado(' Obsidade grau 3')
      setCor('#e74c3c')
      
    }
  }
 
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Seu IMC</Text>
      { imc === 0 ? 
      <View style={[styles.resultado, {borderColor: cor}]}>
        <Text style={styles.resultadoTitle}>0</Text>
        <Text style={styles.resultadoSubtitle}>Resultado</Text>
      </View> : 

      <View style={[styles.resultado, {borderColor: cor}]}>
        <Text style={styles.resultadoTitle}>{imc}</Text>
        <Text style={styles.resultadoSubtitle}>{estado}</Text>
      </View>
      }
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderTitle}>Altura</Text>
        <Text style={styles.textSlider}>{height}</Text>
        <Slider
          style={{ width: 300}}
          onValueChange={v => setHeight(v.toFixed(2))}
          minimumValue={0}
          maximumValue={3}
          minimumTrackTintColor="#7159"
          maximumTrackTintColor="#000"
          value={height}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.sliderTitle}>Peso</Text>
        <Text style={styles.textSlider}>{weight}</Text>
        <Slider
          style={{ width: 300}}
          onValueChange={v => setWeight(v.toFixed(0))}
          minimumValue={0}
          maximumValue={200}
          minimumTrackTintColor="#7159"
          maximumTrackTintColor="#000"
          value={weight}
        />
      </View>
      <Button style={styles.buttonStyle} mode="contained" onPress={Calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </Button>

    </View>
  );
}