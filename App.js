import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { StatusBar, SafeAreaView, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';
import Sacolao from './src/telas/Sacolao';
import mock from './src/mocks/cesta';

function MenuCesta(){
  return <SafeAreaView>
            <Cesta {...mock}/>
            <StatusBar/>
         </SafeAreaView>;
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Cesta de Frutas') {
              iconName = focused
                ? 'basket'
                : 'basket-outline';
            } else if (route.name === 'O Sacolão') {
              iconName = focused 
                ? 'nutrition' 
                : 'nutrition-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Cesta de Frutas" component={MenuCesta} /> 
        <Tab.Screen name="O Sacolão" component={Sacolao} /> 
      </Tab.Navigator>
  );
}

export default function App() {

//Fonte utilizada para o projeto
const [ fonteCarregada ] = useFonts({
  "MontSerratRegular" : Montserrat_400Regular,
  "MontSerratBold" : Montserrat_700Bold,
});

  //Checa se as fontes já foram carregadas antes de exibir no APP
  if(!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <TabsMenu/>
    </NavigationContainer>
  );
}
