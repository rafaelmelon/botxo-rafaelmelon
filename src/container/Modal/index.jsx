import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { closeModal } from '../../redux/modules/navigation';
import { circle, square, triangle, polygon } from '../../assets';
import {
  Title,
  Description,
  Container,
  Tutorial,
  Items,
  Item,
  ItemTitle,
  ItemInfo,
  Canvas,
  Selection,
  Navigation,
  Dots,
  CustomButton,
  CustomImage,
  CustomDot
} from './styles.js';

const ITEMS = [
  {
    title: 'Module',
    info: 'The most basic element',
    icon: circle
  },
  {
    title: 'Connection',
    info: 'Links between modules',
    icon: square
  },
  {
    title: 'Global Connection',
    info: 'The other flow of links',
    icon: triangle
  },
  {
    title: 'NLU - Bot training',
    info: 'You bot is smart',
    icon: polygon
  }
];

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0
    };

    this.handleSkipTutorial = this.handleSkipTutorial.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  handleSkipTutorial() {
    this.props.closeModal();
  }

  handleNext() {
    const selected =
      this.state.selected + 1 === ITEMS.length ? 0 : this.state.selected + 1;
    this.setState({ selected });
  }

  handleSelection(index) {
    this.setState({ selected: index });
  }

  renderItems() {
    return ITEMS.map((item, i) => (
      <Item
        key={item.title}
        onClick={() => this.handleSelection(i)}
        selected={this.state.selected === i}
      >
        <ItemTitle>{item.title}</ItemTitle>
        <ItemInfo>{item.info}</ItemInfo>
      </Item>
    ));
  }

  renderDots() {
    return (
      <Dots>
        {ITEMS.map((item, i) => (
          <CustomDot
            src={circle}
            key={item.info}
            onClick={() => this.handleSelection(i)}
          />
        ))}
      </Dots>
    );
  }

  render() {
    const { modal } = this.props;

    const selected = ITEMS[this.state.selected].icon;

    switch (modal) {
      case 'modal-tutorial': {
        return (
          <Container>
            <Title>What do I need to know to create a Bot?</Title>
            <Description>Follow the numbers of this tutorial</Description>
            <Tutorial>
              <Selection>
                <Items>
                  <ul>{this.renderItems()}</ul>
                </Items>
                <Canvas>
                  <CustomImage src={selected} />
                </Canvas>
              </Selection>
              <Navigation>
                <CustomButton onClick={this.handleSkipTutorial}>
                  Skip tutorial
                </CustomButton>
                {this.renderDots()}
                <CustomButton onClick={this.handleNext}>Next</CustomButton>
              </Navigation>
            </Tutorial>
          </Container>
        );
      }
      default: {
        return null;
      }
    }
  }
}

Modal.propTypes = {
  modal: PropTypes.string,
  closeModal: PropTypes.func
};

export default connect(
  state => ({
    modal: state.navigation.modal
  }),
  {
    closeModal
  }
)(Modal);
