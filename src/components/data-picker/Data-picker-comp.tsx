import React, {FC, useState} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
const DatePickerСomp: FC = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  console.log(JSON.stringify(date));
  return (
    <View style={styles.container}>
      <Text>DatePicker</Text>
      <Text>{JSON.stringify(date)}</Text>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
export default DatePickerСomp;
