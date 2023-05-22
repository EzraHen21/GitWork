import { View, Text,StyleSheet, TextInput } from "react-native";
import CountiesList from "./CountiesList";

export default function App(){
return(
  <View style={styles.container}>
    <CountiesList/>

  </View>
  
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightGray',
    // alignItems: 'center',
    justifyContent: 'center',
  },

}
)
