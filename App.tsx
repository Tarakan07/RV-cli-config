/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import DatePickerСomp from './src/components/data-picker/Data-picker-comp';
import Refresh from './src/components/data-picker/refresh/Refresh';
const App: FC = (): React.JSX.Element => {
  return (
    <View>
      <Text>Hello App</Text>
      <DatePickerСomp />
      <Refresh />
    </View>
  );
};

export default App;
