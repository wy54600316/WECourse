import React from 'react';
import {
  Container,
} from 'amazeui-react';

const year = new Date().getFullYear();

const SiteFooter = React.createClass({
  render() {
    return (
      <footer className="ask-footer">
        <Container>
            <center>Copyright © 2011-{year} 墨麟集团版权所有</center>
        </Container>
      </footer>
    );
  },
});

export default SiteFooter;
