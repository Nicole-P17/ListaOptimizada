import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const Separator = () => (
    <View style={styles.separator} />);

const AddItem = (props) => {
    const {handleChangeText, inputText, handleAddItem} = props;
    return (
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Me siento.." 
        style={styles.textInput}
        onChangeText={handleChangeText}
        value={inputText}/>
  
        <Separator />
        <TouchableOpacity style= {[styles.buttonAdd, styles.allButtons]}
        onPress={handleAddItem}> 
        <Text style={styles.textTouch}> AÑADIR</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles= StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
      },
      textInput:{
        borderBottomColor: 'gray',
        borderBottomWidth:1,
        width: 200,
        alignContent: 'center',
      },
      separator: {
        marginVertical: 4,
      },
      allButtons:{
        padding: 7,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 0.9,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowColor: "whitesmoke",
      },
      buttonAdd:{
        backgroundColor: '#91eb7a',
      },
      textTouch:{
        color:"white",
        fontSize: 16,
      },
});

export default AddItem;