import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ListItem from './ListItem';

const List = (props) => {
    const { itemList, handlemodalOpen} = props;
    const renderItem = data => <ListItem data={data} handlemodalOpen= {handlemodalOpen} />
      return (
          <View style={styles.items}>
            <FlatList
             data={itemList}
             renderItem={renderItem}
             keyExtractor={item => item.id}
            />
        </View>
      )
  }

const styles = StyleSheet.create({
    items:{
        marginTop: 20,
        margin:5,
      },
})

export default List;