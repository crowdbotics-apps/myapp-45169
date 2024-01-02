import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, View, StyleSheet } from 'react-native';

const Petfinder_Home = () => {
  const data = {
    "animals": [{
      "id": 124,
      "organization_id": "NJ333",
      "url": "https://www.petfinder.com/cat/nebula-124/nj/jersey-city/nj333-petfinder-test-account/?referrer_id=d7e3700b-2e07-11e9-b3f3-0800275f82b1",
      "type": "Cat",
      "species": "Cat",
      "breeds": {
        "primary": "American Shorthair",
        "secondary": null,
        "mixed": false,
        "unknown": false
      },
      "colors": {
        "primary": "Tortoiseshell",
        "secondary": null,
        "tertiary": null
      },
      "age": "Young",
      "gender": "Female",
      "size": "Medium",
      "coat": "Short",
      "name": "Nebula",
      "description": "Nebula is a shorthaired, shy cat. She is very affectionate once she warms up to you.",
      "photos": [{
        "small": "https://photos.petfinder.com/photos/pets/124/1/?bust=1546042081&width=100",
        "medium": "https://photos.petfinder.com/photos/pets/124/1/?bust=1546042081&width=300",
        "large": "https://photos.petfinder.com/photos/pets/124/1/?bust=1546042081&width=600",
        "full": "https://photos.petfinder.com/photos/pets/124/1/?bust=1546042081"
      }]
    }],
    "pagination": {
      "count_per_page": 20,
      "total_count": 320,
      "current_page": 1,
      "total_pages": 16,
      "_links": {}
    }
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        {data.animals.map((animal, index) => <View key={index} style={styles.card}>
            <Image style={styles.image} source={{
          uri: animal.photos[0].medium
        }} />
            <Text style={styles.title}>{animal.name}</Text>
            <Text style={styles.description}>{animal.description}</Text>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  description: {
    marginTop: 10
  }
});
export default Petfinder_Home;