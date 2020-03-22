import React, { Component } from "react";

import { connect } from "react-redux";

import "./styles.css";

import imageActions from "../../redux/image/actions";

class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images, error } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        <button onClick={this.props.loadImages}>Load images</button>

        {error && <div className="error">{JSON.stringify(error)}</div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(imageActions.loadImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
