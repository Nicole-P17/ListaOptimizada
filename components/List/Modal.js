import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ModalItem = (props) => {
    const {modalVisible,itemSelected,handleConfirmDelete, handleConfirmStay} = props;
   return(
   <Modal animationType="slide" visible={modalVisible} transparent>
        <View style={ styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalText}> 
                Te sientes asi?</Text>
                <Text style={styles.modalItem}>
                    {itemSelected.value}</Text>

            <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.buttonModalYes} 
          onPress={handleConfirmStay}>
                   <Text style={styles.textTouch}>si!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonModalNo} 
          onPress={handleConfirmDelete}>
                   <Text style={styles.textTouch}>no!</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    </Modal>
   )
}

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
      alignItems: "center",
      justifyContent: "center",
    },
    modalContent:{
        backgroundColor:'white',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        padding:'13%',
        marginBottom:'125%'
    },
    modalText:{
        fontSize:18,
    },
    modalItem:{
        fontSize: 30,
        marginTop: 10,
    },
    modalButtons:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap:'wrap',
    },
    buttonModalNo:{
        backgroundColor: 'orangered',
        padding: 8,
        margin: 3,
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
    buttonModalYes:{
        backgroundColor: '#54E346',
        padding: 8,
        margin:3,
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
    textTouch:{
        color:"white",
        fontSize: 16,
      },
})

export default ModalItem;