/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {FlatList, Text, View, RefreshControl} from 'react-native';
const data = [
  {id: 1, title: '1 item'},
  {id: 2, title: '2 item'},
  {id: 3, title: '3 item'},
  {id: 4, title: '4 item'},
  {id: 5, title: '5 item'},
  {id: 6, title: '6 item'},
  {id: 7, title: '7 item'},
  {id: 8, title: '8 item'},
  {id: 9, title: '9 item'},
  {id: 10, title: '10 item'},
  {id: 11, title: '11 item'},
  {id: 12, title: '12 item'},
  {id: 13, title: '13 item'},
  {id: 14, title: '14 item'},
  {id: 15, title: '15 item'},
  {id: 16, title: '16 item'},
  {id: 17, title: '17 item'},
  {id: 18, title: '18 item'},
  {id: 19, title: '19 item'},
  {id: 20, title: '20 item'},
  {id: 21, title: '21 item'},
  {id: 22, title: '22 item'},
];

const Refresh: FC = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={{marginTop: 20}}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl
            colors={['#9Bd35A', '#689F38']}
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
        // refreshing={refreshing}
        // onRefresh={() => {
        //   console.log('update');
        //   onRefresh();
        // }}
      />
    </View>
  );
};

const Item = ({item}) => {
  return (
    <View
      style={{
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 1,
      }}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default Refresh;
