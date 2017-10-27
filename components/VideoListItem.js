import React from 'react';
import {
  View,
  Text,
  Image
  } from 'react-native';
  import { Card } from 'react-native-elements';

const VideoListItem = ({ video }) => {
  const {
    imageStyle,
    cardStyle,
    contentStyle,
    titleStyle,
    channelTitleStyle,
    descriptionStyle
   } = styles;
  const {
    title,
    channelTitle,
    description,
    thumbnails:{
      medium: { url }
    }
  } = video.snippet;

  return (
    <View>
      <Card titleStyle={titleStyle} title={title} containerStyle={cardStyle}>
        <Image
          style={imageStyle}
          source = {{ uri: url }}
        />
        <View style={contentStyle}>
          {/* <Text style={titleStyle}>
            {title}
          </Text> */}
          <Text style={channelTitleStyle}>
            {channelTitle}
          </Text>
          <Text style={descriptionStyle}>
            {description}
          </Text>
        </View>
      </Card>
    </View>
  );
};
const styles = {
  cardStyle:{
    padding: 5
  },
  contentStyle:{
    alignSelf:'stretch',
    height: 100
  },
  titleStyle:{
    fontSize: 15,
    marginBottom: 5
  },
  channelTitleStyle:{
    fontSize: 15,
    color: '#000000',
    marginBottom: 5,
    alignSelf: 'flex-start'
  },
  descriptionStyle:{
    fontSize:11,
    alignSelf:'center'
  },
  imageStyle:{
  alignSelf:'stretch',
  height:180
  }
};
export default VideoListItem;
