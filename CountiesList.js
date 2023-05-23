
import { Text, View, StyleSheet, TextInput, Button, FlatList } from "react-native"

import React,{useState} from "react"

export default function CountiesList(){

const [newContry, setNewContry]= useState("")
const [ContryList, setContryList]= useState([])

const addContry= () => {
    setContryList((currentList) =>
        [ ...currentList, { id: Math.random , country: newContry}])
}

    return(
        <View style= {styles.container}>
        <Text style={styles.header}> Counties List</Text> 
        <TextInput style={styles.input} placeholder="Enter new contry" 
        onChangeText={(txt)=>setNewContry(txt)}
        />    
        <Button title="Add" onPress={addContry}/>

        <FlatList
          data={ContryList}
         renderItem={({ item }) => (
          <View style={styles.listItem}>
             <Text>{item.country}</Text>
          </View>
          )}
             keyExtractor={item => item.id}
        />

        </View>
        
        )}
            

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightGray',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: "30%"
    },
    header:{
        fontSize:25,
        marginBottom:10
    },
    input:{
        borderColor:'black',
        borderBottomWidth:1,
        width:'30%', 
        marginBottom: 10 
    },
    listItem: {
        backgroundColor: "whitesmoke",
        borderRadius: 15, 
        minHeight: 50,
        minWidth: "80%", 
        justifyContent: 'center',
        alignItems: "center", 
        margin: 10

    }
}
)