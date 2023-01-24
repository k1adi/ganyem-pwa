import PostRestoReview from '../../utils/post-resto-review';

class FormReview extends HTMLElement {
  set id(id) {
    this._restoId = id;
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="form-review">
        <input type="hidden" name="id" value="${this._restoId}">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" name="name" placeholder="Your name" class"form-input" required>
        </div>

        <div class="form-group">
          <label for="review">Review</label>
          <textarea  name="review" placeholder="Write your review (please use polite words)" class="input-description__review" required></textarea>
        </div>

        <div class="form-button">
          <button type="submit">Post</button>
        </div>
      </form>
    `;

    const formWrapper = this.querySelector('.form-review');
    PostRestoReview.init({
      formReview: formWrapper,
    });
  }
}

customElements.define('form-review', FormReview);
