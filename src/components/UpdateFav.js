import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class UpdateFav extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showUpdate}>
          <Modal.Header >
            <Modal.Title>Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={(e) => {
                this.props.handleUpdateForm(e);
              }}
            >
              <input type="text" name="title" placeholder="title" defaultValue={this.props.title} />
              <input type="text" name="toUSD"   placeholder="Price" defaultValue={this.props.toUSD} />
              <input
                type="text"
                name="image_url"
                placeholder="image"
                defaultValue={this.props.image_url}
              />
              <input
                type="text"
                placeholder="description"
                name="description"
                defaultValue={this.props.description}
              />
              <input type="submit" value="update" />
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UpdateFav;
