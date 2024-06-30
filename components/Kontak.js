import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Kontak(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image source={props.gambar} style={styles.img} />
        <View style={styles.teks}>
          <Text style={styles.title}>{props.judul}</Text>
          <Text style={styles.telp}>{props.telpon}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
    marginTop: 5,
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  teks: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  },
});
