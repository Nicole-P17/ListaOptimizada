import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ListItem = (props) => {
    const {data, handlemodalOpen} = props;
    return(
      <View style={styles.item}> 
            <Text style={styles.itemText}>{data.item.value}</Text>

            <TouchableOpacity 
            style= {[styles.buttonDelete, styles.allButtons]}
            onPress={()=> handlemodalOpen(data.item.id)}> 
            <Text style={styles.textTouch}>X</Text>
            </TouchableOpacity>
            
          </View>
          
    );
}

const styles = StyleSheet.create({
    item:{
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 0.9,
      },
    allButtons:{
        padding: 7,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
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
      buttonDelete:{
        backgroundColor: 'coral',
        marginLeft: 8
      },
      textTouch:{
        color:"white",
        fontSize: 16,
      },
      itemText:{
        fontSize: 16,
      }
});

export default ListItem;