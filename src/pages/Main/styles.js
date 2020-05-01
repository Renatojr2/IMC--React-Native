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
    width: 210,
    height: 210,
    backgroundColor: '#fff',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 30,
    padding: 20,
    borderRadius: 210/2
    
  },

  resultadoTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'

  },

  resultadoSubtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginTop: 10
  },

  sliderContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  textSlider: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 10,
  },

  sliderTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10

  },

  buttonStyle: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    marginTop: 40
  },
  buttonText: {
    fontSize: 25
  }
})
