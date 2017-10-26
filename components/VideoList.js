import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => {
  const videoItems = videos.map( video => (
    <VideoListItem
      key={video.etag}
      video={video}
    />
  ));

  return (
    <ScrollView>
      <View style={styles.container}>
        {videoItems}
      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  }
};
export default VideoList;
