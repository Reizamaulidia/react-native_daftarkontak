import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Detail = ({ route, navigation }) => {
  const { friend } = route.params;
  return (
    <View style={styles.container}>
      <Image source={friend.image} style={styles.image} />
      <Text style={styles.name}>{friend.name}</Text>
      
      <View style={styles.phoneContainer}>
        <View style={styles.phoneInfoContainer}>
          <Text style={styles.phone}>{friend.phone}</Text>
          <Text style={styles.phoneInfo}>Mobile | Indonesia</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => alert('Call ' + friend.phone)}>
            <View style={styles.iconBackground}>
              <Icon name="call" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Message ' + friend.phone)}>
            <View style={styles.iconBackground}>
              <Icon name="message" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={styles.description}>{friend.description}</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Daftar Kontak" onPress={() => navigation.navigate('DaftarKontak')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  phoneInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  phone: {
    fontSize: 20,
    color: '#3498db',
  },
  phoneInfo: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBackground: {
    backgroundColor: '#3498db',
    borderRadius: 50,
    padding: 7,
    marginLeft: 10,
  },
  description: {
    fontSize: 18,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default Detail;