import React from 'react'

import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';
import Button from 'react-bulma-components/lib/components/button';

const FooterContent = () => {
  return(
    <Hero size="fullheight">
      <Hero.Head renderAs="header" />
      <Hero.Body />
      <Hero.Footer>
        <Footer>
          <Button color='warning'><a href="#top"><i className="fas fa-chevron-circle-up"></i></a></Button>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <p>
                <strong>The base for your App</strong> Developed by <a href="https://josedromero.com">José Romero</a>.
                  © 2020
              </p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>

  )
}
export default FooterContent
