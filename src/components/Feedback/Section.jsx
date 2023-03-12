import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from './Section.styled';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionContainer>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
