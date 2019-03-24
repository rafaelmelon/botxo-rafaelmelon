import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import { setModal } from '../../redux/modules/navigation';
import { Container, CustomButton } from './styles.js';

class Home extends Component {
  constructor() {
    super();

    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.props.setModal('modal-tutorial');
  }

  render() {
    return (
      <Container>
        <CustomButton onClick={this.handleOpenModal}>Open Modal</CustomButton>
        <Modal />
      </Container>
    );
  }
}

Home.propTypes = {
  setModal: PropTypes.func
};

export default connect(
  state => ({}),
  {
    setModal
  }
)(Home);
