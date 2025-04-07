import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./componentes/telaLogin"
import Senha from "./componentes/telaSenha"


const Stack = createNativeStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "Login" component={Login} />
      <Stack.Screen name = "Senha" component={Senha} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}