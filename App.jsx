import React from 'react';
import {SafeAreaView, Text, View } from 'react-native';
// import OnPress from './src/components/OnPress';
// import JSX from './src/components/JSX';
// import UseStateHook from './src/components/UseStateHook';
// import Pros from './src/components/pros'
// import InputText from './src/components/InputText';
// import Styling from './src/components/Styling';
// import FlatListScreen from './src/components/FlatListScreen';
// import SectionList from './src/components/SectionList';
// import LoginForm from './src/components/LoginForm';
import ContactListScreen from './src/screens/Contact/ContactListScreen';
import Gride from './src/components/Gride';



const App = () => {
  return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        {/* <OnPress /> */}
        {/* <UseStateHook /> */}
        {/* <Pros /> */}
        {/* <InputText /> */}
        {/* <Styling /> */}
        {/* <FlatListScreen/> */}
        {/* <SectionList/> */}
        {/* <LoginForm/> */}
        {/* <ContactListScreen/> */}
        <Gride/>
      </View>
  )
};

export default App;
