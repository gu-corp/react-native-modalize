import React, {useRef} from 'react';
import {View, Animated} from 'react-native';
import {Portal, Host} from 'react-native-portalize';

import {Layout} from './components/layout/Layout';
import {Header} from './components/header/Header';
import {AppleMusicPlayer} from './components/modals/AppleMusicPlayer';
import {Button} from './components/button/Button';

export const AppleMucisScreen = () => {
  const modals = Array.from({length: 8}).map(_ => useRef(null).current);
  const animated = useRef(new Animated.Value(0)).current;
  const renderButtons = links => {
    return links.map((link, i) => (
      <Button key={i} onPress={() => modals[i].open()} name={link} />
    ));
  };
  return (
    <Host>
      <View style={{flex: 1}}>
        <Layout>
          <View />
          <Header subheading="Run with React Navigation" />
          {renderButtons([
            'Simple content',
            'Fixed content',
            'Snapping list',
            'Absolute header',
            'Flat List',
            'Section List',
            'Apple Music Player',
            'Facebook WebView',
            'Slack TabView',
          ])}
          <Portal>
            <AppleMusicPlayer
              ref={el => (modals[6] = el)}
              animated={animated}
            />
          </Portal>
        </Layout>
      </View>
    </Host>
  );
};
