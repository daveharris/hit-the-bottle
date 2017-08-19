import React from "react";
import { Container, Content, Button, Text } from "native-base";
import Expo from 'expo';
import { AppHeader, AppFooter } from "./components";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: 'Initial content...'
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  handleUpdateContent = () => {
    this.setState({
      content: 'Updated content...'
    })
  }

  render() {
    return (
      <Container>
        <AppHeader />

        <Content>
          <Text>{this.state.content}</Text>

          <Button onPress={this.handleUpdateContent}>
            <Text>Update Content</Text>
          </Button>
        </Content>

        <AppFooter />
      </Container>
    );
  }
}
