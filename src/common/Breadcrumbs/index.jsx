import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '../Container';

const Breadcrumbs = ({ links }) => (
  <Container>
    {links.filter(link => links.indexOf(link) < links.length - 1).map(link => (
      <span key={links.indexOf(link)}>
        <Link to={link.href}>{link.label}</Link>
        <span> / </span>
      </span>
    ))}
    <span>{links[links.length - 1].label}</span>
  </Container>
);

Breadcrumbs.propTypes = {
  links: arrayOf(
    shape({
      label: string,
      link: string,
    }),
  ).isRequired,
};

export default Breadcrumbs;