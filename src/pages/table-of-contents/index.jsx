import React from 'react';
import Container from '../../common/Container';
import { toc } from './toc.json';

const TableOfContents = () => {
  return (
    <>
      <Container>
        <h1>Table of Contents</h1>
        <h2>Natural Laws</h2>
      </Container>
      <Container grid>
        {toc.map(item => (
          <Container key={toc.indexOf(item)} panel link={item.link}>
            <small>Lesson {item.lesson}</small>
            <p>{item.title}</p>
          </Container>
        ))}
      </Container>
    </>
  );
};

export default TableOfContents;