import React from 'react';
import { View, Text, Slider } from 'react-native';



import styles from './styles';

export default function Main() {
  const [height, setHeight] = React.useState(0)


 
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Seu IMC</Text>
      <View style={styles.resultado}>
        <Text style={styles.resultadoTitle}>25</Text>
        <Text style={styles.resultadoSubtitle}>Normal</Text>
      </View>
      <View style={styles.sliderContainer}>
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

    </View>
  );
}