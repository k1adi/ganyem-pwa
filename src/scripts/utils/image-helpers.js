import brokenImage from '../../images/broken-image.jpg';

class ImageHelper {
  constructor({ imgElement, imgSource, imgAlt }) {
    this._imgElement = imgElement;
    this._imgSource = imgSource;
    this._imgAlt = imgAlt;
    this._imgObject = new Image();
  }

  _updateImage(imgSourceResult) {
    this._imgElement.setAttribute('src', imgSourceResult);
    this._imgElement.setAttribute('alt', this._imgAlt);
    this._imgElement.removeAttribute('class');
  }

  asyncLoadImage() {
    this._imgObject.onload = () => {
      this._updateImage(this._imgSource);
    };

    this._imgObject.onerror = () => {
      this._updateImage(brokenImage);
    };

    this._imgObject.src = this._imgSource;
  }
}

export default ImageHelper;
