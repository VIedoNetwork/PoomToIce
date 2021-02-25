import * as React from 'react';
import { useContext, Component} from 'react'
import {View, StyleSheet, Text, Alert } from 'react-native';
import {FilledButton} from '../components/FilledButton';
import { AuthContext } from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { Input, ListItem, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

// const poom  =   firestore().collection("poom").doc('JVqMmqwT0C3oCnz7inp7').get()

const poom = 'Eiei 5555'

class test extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <ScrollView>
          <View style={styles.container}>
            <Text>
                {poom}
            </Text>
          </View>
        </ScrollView>
      
    );
  }
}


const styles = StyleSheet.create({
    title: {
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      marginVertical: 10,
      marginBottom: 15,
    },
    loginButton: {
      marginVertical: 32,
    },
  
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginBottom: 100
  
    }
});

export default test;