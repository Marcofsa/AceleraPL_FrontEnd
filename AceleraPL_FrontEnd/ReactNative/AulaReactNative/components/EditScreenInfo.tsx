import React from 'react';
import { StyleSheet, Linking, Button } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          PREPARE-SE PARA O QUE ESTÁ PRESTES A VER.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUeNTBoIGRlIG5ldmVyIGdvbm5hIGdpdmUgeW91IHVw">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
           ///////////////////////
          </Text>
        </ExternalLink>
        <Button
          title="Aperte imediatamente!!!"
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUeNTBoIGRlIG5ldmVyIGdvbm5hIGdpdmUgeW91IHVw')}
        />
      </View>
    </View>

  );

  
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
