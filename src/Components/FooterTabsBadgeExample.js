import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text,} from 'native-base';
export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
           <Button badge vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button badge vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}