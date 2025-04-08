//GABRIEL CORTEZ E HELOÍSA PASSOS

import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./componentes/telaLogin"
import Senha from "./componentes/telaSenha"
import Estoque from "./componentes/estoque"
import AddPeca from "./componentes/addPeca"
import EditPeca from "./componentes/editPeca"
import { EstoqueProvider } from "./componentes/EstoqueContext"


const Stack = createNativeStackNavigator()

export default function App() {
  return(
    <EstoqueProvider>
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "Login" component={Login} />
      <Stack.Screen name = "Senha" component={Senha} />
      <Stack.Screen name = "Estoque" component={Estoque} />
      <Stack.Screen name = "AddPeca" component={AddPeca} />
      <Stack.Screen name = "EditPeca" component={EditPeca} />
    </Stack.Navigator>
  </NavigationContainer>
    </EstoqueProvider>
  )
}