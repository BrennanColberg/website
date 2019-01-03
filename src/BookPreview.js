import Preview from './Preview.js';
import bookFileIndex from './assets/book-index.json';

class BookPreview extends Preview {

  componentDidMount() {
    this.setState({

      articles: bookFileIndex.map(file => {
        // get book JSON that is referred to
        let book = require("./assets/books/" + file + ".json")
        // translate it into display format
        return ({
          "title": book.title,
          "tags": book.author
        });
      }),

      className: this.state.className + " Book"

    });
  }

}

export default BookPreview;