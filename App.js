
import React, { Component } from 'react';
import { View } from 'react-native';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyByuCz-NnIsB3e_J7q6fKYFr0R919uekWk';

export default class App extends Component {
  state = {
    loading: false,
    videos: []
  }

 componentWillMount(){
  this.searchYT()
 }

  onPressSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    YTSearch({ key: API_KEY, term }, videos => {
            this.setState({
              loading: false,
              videos
             })
    });
  }
  render() {
    const { loading, videos } = this.state; //destructuring

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }} >
        <AppHeader
          headerText = 'Youtube Search'
         />
        <SearchBar
          loading={ this.state.loading }
          onPressSearch={ this.onPressSearch }
         />
         <VideoList videos={videos} />
      </View>
    );
  }
}
