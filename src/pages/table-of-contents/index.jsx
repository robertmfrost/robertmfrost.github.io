import React from 'react';
import Container from '../../common/Container';
import toc from './toc.json';

const TableOfContents = () => {
  return (
    <>
      <Container>
        <h1>Table of Contents</h1>
        <h2>Natural Laws</h2>
      </Container>
      <Container grid>
        {toc['natural-laws'].map(item => (
          <Container key={toc['natural-laws'].indexOf(item)} panel link={`/${item.link}`}>
            <small>Lesson {item.lesson}</small>
            <p>{item.title}</p>
          </Container>
        ))}
      </Container>
      <Container>
        <h2>Mathematics</h2>
      </Container>
      <Container grid>
        {toc['mathematics'].map(item => (
          <Container key={toc['mathematics'].indexOf(item)} panel link={`/${item.link}`}>
            <small>Lesson {item.lesson}</small>
            <p>{item.title}</p>
          </Container>
        ))}
      </Container>
    </>
  );
};

export default TableOfContents;