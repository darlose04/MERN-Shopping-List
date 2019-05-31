import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  // this goes to the itemReducer file
  // state = {
  //   items: [
  //     { id: uuid(), name: 'Eggs'},
  //     { id: uuid(), name: 'Milk'},
  //     { id: uuid(), name: 'Steak'},
  //     { id: uuid(), name: 'Water'},
  //   ]
  // }

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render() {
    // item represents the entire state object, items is the array inside the state
    const { items } = this.props.item;
    return (
      <div>
        <Container>
         {/* no longer need this button */}
          {/* <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={() => {
              const name = prompt('Enter Item');
              if (name) {
                this.setState(state => ({
                  items: [...state.items, { id: uuid(), name }]
                }));
              }
            }}
          >Add Item</Button> */}
          <ListGroup>
            <TransitionGroup className="shopping-list">
              {items.map(({ id, name }) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      // this is no longer needed in this format since state is now in redux
                      // onClick={() => {
                      //   this.setState(state => ({
                      //     items: state.items.filter(item => item.id !== id)
                      //   }));
                      // }}
                      onClick={this.onDeleteClick.bind(this, id)} // this id comes from line 43
                    >&times;</Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      </div>
    )
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  item: state.item, // using item because that's what it is set to in the rootReducer
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);