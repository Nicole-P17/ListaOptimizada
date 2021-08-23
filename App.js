import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  TouchableOpacity,
  Alert } 
  from 'react-native';

  import Modal from './components/List/Modal';
  import AddItem from './components/List/AddItem';
  import List from './components/List/index';


export default function App() {

  const [inputText, setInputText] = useState('');
  const [itemList, setItemList] = useState([]);
  const [inputError, setInputError] = useState('');

  const [modalVisible, setModalvisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const handleChangeText = (t) => {
    setInputText(t)
    setInputError('');
  };
  const handleAddItem = () => {
    if (inputText){
      setItemList([
        ...itemList,
        {
          id: Math.random().toString(),
          value: inputText,
        },
      ]);
      setInputText('');
      setInputError('');
    }else {
      setInputError('Debes completarlo!');
    }
  }

  const handleConfirmDelete = () =>{
    const id= itemSelected.id;
    setItemList(itemList.filter(item => item.id !== id));
    setModalvisible(false);
    setItemSelected({});
  }

  const handleConfirmStay = () =>{
    const id= itemSelected.id;
    setModalvisible(false);
  }

  const handlemodalOpen = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalvisible(true);
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="auto"/>

      <View>
        <Text style={styles.text}>
          Describe como te sientes en pocas palabras
        </Text>
      </View>
      <AddItem 
      handleChangeText= {handleChangeText}
      inputText={inputText}
      handleAddItem={handleAddItem}/>

      <Text style={styles.inputError}>{inputError}</Text>
      <List
      handlemodalOpen={handlemodalOpen}
      itemList={itemList}
      />

      <Modal 
      modalVisible={modalVisible}
      itemSelected={itemSelected}
      handleConfirmDelete={handleConfirmDelete}
      handleConfirmStay={handleConfirmStay}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#edfcff",
    padding: 30,
  },
  text:{
    marginTop: '35%',
    fontSize: 15,
  },
  inputError:{
    color: 'orangered',
  },
});

