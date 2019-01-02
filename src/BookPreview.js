import Preview from './Preview.js';
import books from './assets/books.json';

class BookPreview extends Preview {

  componentDidMount() {
    this.setState({
      articles: books.map(book => ({
        "title": book.title,
        "tags": book.author
      })),
      className: this.state.className + " Book"
    });
  }

}

export default BookPreview;