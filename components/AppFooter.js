import React from "react";
import { Footer, FooterTab, Button, Icon, Text, Title } from "native-base";

export const AppFooter = () => {

  return (
    <Footer>
      <FooterTab>
        <Button active>
          <Icon name="home" />
          <Text>Home</Text>
        </Button>
        <Button>
          <Icon name="browsers" />
          <Text>Formulas</Text>
        </Button>
        <Button>
          <Icon name="flask" />
          <Text>Cleaning</Text>
        </Button>
        <Button>
          <Icon name="chatbubbles" />
          <Text>Forum</Text>
        </Button>
      </FooterTab>
    </Footer>
  )

};

export default AppFooter;
