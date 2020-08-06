import React from 'react';
import Container from '../../common/Container';
import Breadcrumbs from '../../common/Breadcrumbs';

const PageNotFound = () => (
  <Container>
    <Breadcrumbs
      links={[
        {
          href: "table-of-contents",
          label: "Table of Contents"
        },
        {
          label: (window.location.pathname + window.location.hash)
            .replace(/\//g, '')
            .replace(/#/g, ' ')
            .replace(/-/g, ' ')
            .replace(/\w\S*/g, word => {
              return word.charAt(0).toUpperCase() + word.substr(1);
            }),
        },
      ]}
    />
    <h1>Page Not Found</h1>
    <Container panel>
      <p>We couldn't find the page you were looking for.</p>
    </Container>
  </Container>
);

export default PageNotFound;