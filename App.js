
import React, { Component } from 'react';
import { View } from 'react-native';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyByuCz-NnIsB3e_J7q6fKYFr0R919uekWk';

export default class App extends Component {
onPressSearch = term => {
  this.searchYT(term);
}

searchYT = term => {
  YTSearch({ key: API_KEY, term }, videos => {
    console.log(videos);
  });
}
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }} >
        <AppHeader
          headerText = 'Youtube Search'
         />
        <SearchBar
          onPressSearch={this.onPressSearch}

         />
      </View>
    );
  }
}
