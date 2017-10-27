import React from 'react';
import { Button } from 'react-native-elements';
import { Linking } from 'react-native';

const WatchButton = ({ videoId }) => (
  <Button
    small
    raised
    title="Watch on Youtube"
    //icon={{name: 'play_arrow'}}
    containerViewStyle={{ marginTop: 10 }}
    backgroundColor='#E62117'
    onPress ={() => {
          Linking.openURL(`https://m.youtube.com/watch?v=${videoId}`).catch(err => console.error('An error occurred', err));
    }}
  />
)

export default WatchButton;
