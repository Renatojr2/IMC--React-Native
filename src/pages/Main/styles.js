import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }, 
  
  resultado: {
    alignItems: 'center',
    marginVertical: 100,
    backgroundColor: "#888",
    padding: 20,
    borderRadius: 20/2
    
  },

  resultadoTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'

  },

  resultadoSubtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff'
  },

  sliderContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  textSlider: {
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 20,
  }
})
