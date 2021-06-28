import React from "react";
import { Container, Icon, Input, Menu } from "semantic-ui-react";

export const NavBar = () => {
  return (
   <Menu fixed='top' inverted>
     <Container>
     <Menu.Item header>
      <img src="/assets/logo.png" alt="Logo" style={{width:'90px'}}/>
     </Menu.Item>
     <Input
    icon={<Icon name='search' inverted circular link />}
    placeholder='Kërko...'
  />

 <Icon name='user' size='big'/>
 <Menu.Item></Menu.Item>

  <Icon name='shopping cart' size='big'/>
     </Container>

   </Menu>
  );
};
