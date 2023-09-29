import React, {useState, useEffect} from 'react';
//import Realm from 'realm';
import Splash from './src/splash';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Header from './src/components/header';

// const catalogSchema = {
//   name: 'catalog',
//   properties: {
//     _id: 'objectId?',
//     _partition: 'string?',
//     description: 'string?',
//     name: 'string?',
//     price: 'string?',
//     product_id: 'string?',
//   },
//   primaryKey: '_id',
// };

// const app = new Realm.App({id: 'ncr-tyqzn'});
// const credentials = Realm.Credentials.anonymous();

// const Item = ({item, onPress, backgroundColor, textColor}) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <Text style={[styles.title, textColor]}>Product : {item.title}</Text>
//     <Text style={[styles.descrition, textColor]}>Price : {item.customerPrice}</Text>
//     <Text style={[styles.descrition, textColor]}>
//       description :{item.description}
//     </Text>
//   </TouchableOpacity>
// );

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState([]);
  const [show, showSplash] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      showSplash(true);
    }, 5000);
  }, []);

  // async function quickStart() {
  //   await app.logIn(credentials);
  //   Realm.copyBundledRealmFiles();
  //   const config = {
  //     sync: {
  //       user: app.currentUser,
  //       partitionValue: 'master',
  //     },
  //     schema: [catalogSchema],
  //     path: 'syncedCopy.realm',
  //   };

  //   const realm = await Realm.open(config);
  //   const tasks = realm.objects('catalog');
  //   const newArray = JSON.parse(JSON.stringify(tasks));
  //   console.log(`The lists of tasks are: ${newArray})}`);
  //   setData(newArray);
  //   realm.close();
  // }

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#808080' : '#C5C5C5';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item._id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {show ? (
        <View>
          <Header></Header>
        </View>
        // <FlatList
        //   data={data}
        //   renderItem={renderItem}
        //   keyExtractor={(item, index) => index.toString()}
        //   extraData={selectedId}
        // />
      ) : (
        <Splash />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descrition: {
    fontSize: 12,
  },
});

export default App;
