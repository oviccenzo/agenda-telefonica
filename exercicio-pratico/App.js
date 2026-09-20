import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function AgendaTelefonica() {
  return (
    <View style={styles.container}>
    
      {/*Agenda Telefônica*/}
      <Text style = {styles.titulo} >Agenda telefonica </Text>

      
      {/*Linha 1 Contato*/}
      <TextInput  
        style = {styles.input}
        placeholder= "Informe o contato da pessoa: "
      />

      {/*Linha 2 Nome*/}
      <TextInput
        style = {styles.input}
        placeholder = "Informe o nome da pessoa: "
      />
      {/*Linha 3: Telefone*/}
      <TextInput
        style = {styles.input}
        placeholder = "Informe o telefone da pessoa: "
      />

      {/*3 - Criação do botão*/}
      <View style={styles.areaBotoe}>

      <View styles={styles.areaBotoe}>
        <Button 
        title="Adicionar" 
        color="red"
        onPress = {() => alert("Adicionado com sucesso")} />
      </View>
      
      <View styles={styles.botaoWrapper}>
        <Button 
        title="Remover" 
        color="green" 
        onPress = {() => alert("Removido com secusso")}/>
      </View>

      <View styles={styles.botaoWrapper}>
        <Button 
        title="Salvar" 
        color="#d4af37" 
        onPress = {() => alert("Salvo com sucesso")}/>
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  areaBotoe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  botaoWrapper: {
    width: '30%',
  }
});