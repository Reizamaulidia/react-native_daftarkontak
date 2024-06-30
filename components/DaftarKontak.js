import React, { useState } from 'react';
import { View, ScrollView, TextInput, StyleSheet, Text } from 'react-native';
import Kontak from './Kontak';

const friends = [
  { id: '1', name: 'Nadia Putri Rahmawati', description: 'Teman Kuliah', phone: '+62 810-1112-1314', image: require('../assets/2.jpg') },
  { id: '2', name: 'Fauzia Nurafni', description: 'Teman Kuliah', phone: '+62 811-1213-1415', image: require('../assets/1.jpg') },
  { id: '3', name: 'Putri Aulia Maulida', description: 'Teman Kuliah', phone: '+62 812-1314-1516', image: require('../assets/3.jpg') },
  { id: '4', name: 'Asri Nurkholidah', description: 'Teman Kuliah', phone: '+62 813-1415-1617', image: require('../assets/4.jpg') },
  { id: '5', name: 'Alma Sakhiragama', description: 'Teman Kuliah', phone: '+62 814-1516-1718', image: require('../assets/11.jpg') },
  { id: '6', name: 'Syalwa Fida Wifa', description: 'Teman Kuliah', phone: '+62 815-1617-1819', image: require('../assets/1.jpg') },
  { id: '7', name: 'Silvy Denia Putri', description: 'Teman Kuliah', phone: '+62 816-1718-1920', image: require('../assets/2.jpg') },
  { id: '8', name: 'Fino Falentino', description: 'Teman Kuliah', phone: '+62 817-1819-2021', image: require('../assets/5.jpg') },
  { id: '9', name: 'Feri Irawan', description: 'Teman Kuliah', phone: '+62 818-1920-2122', image: require('../assets/6.jpg') },
  { id: '10', name: 'M Utama Luhur Budhy', description: 'Teman Kuliah', phone: '+62 819-2021-2223', image: require('../assets/7.jpg') },
  { id: '11', name: 'M George Elmar', description: 'Teman Kuliah', phone: '+62 820-2122-2324', image: require('../assets/8.jpg') },
  { id: '12', name: 'Nazmi Maulana Fauzan', description: 'Teman Kuliah', phone: '+62 821-2223-2425', image: require('../assets/7.jpg') },
  { id: '13', name: 'Arya Pangestu', description: 'Teman Kuliah', phone: '+62 822-2324-2526', image: require('../assets/5.jpg') },
  { id: '14', name: 'Raka Wahyu Sagara', description: 'Teman Kuliah', phone: '+62 823-2425-2627', image: require('../assets/5.jpg') },
  { id: '15', name: 'Restu Gede Purnama', description: 'Teman Kuliah', phone: '+62 851-2021-2223', image: require('../assets/6.jpg') },
  { id: '16', name: 'Carol Dwi Putra', description: 'Teman Kuliah', phone: '+62 852-2121-2223', image: require('../assets/7.jpg') },
  { id: '17', name: 'Ages Gelar Pangestu', description: 'Teman Kuliah', phone: '+62 853-2221-2223', image: require('../assets/8.jpg') },
  { id: '18', name: 'Gibran Genta', description: 'Teman Kuliah', phone: '+62 854-2321-2223', image: require('../assets/9.jpg') },
  { id: '19', name: 'M Farel Abdillah', description: 'Teman Kuliah', phone: '+62 855-2421-2223', image: require('../assets/5.jpg') },
  { id: '20', name: 'Fajar Budiman', description: 'Teman Kuliah', phone: '+62 856-2521-2223', image: require('../assets/5.jpg') },
  { id: '21', name: 'Moh Abdi Hafiz', description: 'Teman Kuliah', phone: '+62 857-2621-2223', image: require('../assets/8.jpg') },
  { id: '22', name: 'Rizky Maulana', description: 'Teman Kuliah', phone: '+62 858-2721-2223', image: require('../assets/7.jpg') },
  { id: '23', name: 'Eri Zulfan', description: 'Teman Kuliah', phone: '+62 822-2421-2223', image: require('../assets/8.jpg') },
  { id: '24', name: 'Nur Insan', description: 'Teman Kuliah', phone: '+62 855-2928-2223', image: require('../assets/9.jpg') },
  { id: '25', name: 'Hanif Imam', description: 'Teman Kuliah', phone: '+62 855-3021-2425', image: require('../assets/5.jpg') },
  { id: '26', name: 'Maulana Ifnu', description: 'Teman Kuliah', phone: '+62 856-2129-2720', image: require('../assets/6.jpg') },
  { id: '27', name: 'Rafdy Fauzan', description: 'Teman Kuliah', phone: '+62 855-2621-2223', image: require('../assets/7.jpg') },
  { id: '28', name: 'Muhammad Fadlan', description: 'Teman Kuliah', phone: '+62 821-2421-2223', image: require('../assets/8.jpg') },
  { id: '29', name: 'Arip', description: 'Teman Kuliah', phone: '+62 812-2421-2223', image: require('../assets/9.jpg') },
  { id: '30', name: 'Samani Kamil', description: 'Teman Kuliah', phone: '+62 812-2622-2223', image: require('../assets/5.jpg') },
  { id: '31', name: 'Luthfi Fauzan', description: 'Teman Kuliah', phone: '+62 813-2021-2223', image: require('../assets/7.jpg') },
  { id: '32', name: 'M Arizki', description: 'Teman Kuliah', phone: '+62 811-2421-2223', image: require('../assets/8.jpg') },
  { id: '33', name: 'Moh Rizki', description: 'Teman Kuliah', phone: '+62 821-2421-2223', image: require('../assets/9.jpg') },
  { id: '34', name: 'Feri Ekalaya', description: 'Teman Kuliah', phone: '+62 851-2421-2223', image: require('../assets/9.jpg') },
  { id: '35', name: 'Muhammad Fakhri', description: 'Teman Kuliah', phone: '+62 855-2020-2223', image: require('../assets/5.jpg') },
  { id: '36', name: 'Dhiya Jauhar', description: 'Teman Kuliah', phone: '+62 855-2021-2022', image: require('../assets/5.jpg') },
  { id: '37', name: 'Faisal Rafli', description: 'Teman Kuliah', phone: '+62 851-2022-2023', image: require('../assets/9.jpg') },
  { id: '38', name: 'M Sachran', description: 'Teman Kuliah', phone: '+62 822-2023-2024', image: require('../assets/9.jpg') },
];

friends.sort((a, b) => a.name.localeCompare(b.name));

const DaftarKontak = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const filteredContacts = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={`Search (${friends.length} contacts)`}
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      {filteredContacts.map((item) => (
        <Kontak 
          key={item.id}
          gambar={item.image} 
          judul={item.name} 
          telpon={item.phone} 
          onPress={() => navigation.navigate('Detail', { friend: item })}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default DaftarKontak;