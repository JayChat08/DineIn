import View from './View.js';
import PreviewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
class BookmarksView extends View {
  _parentELement = document.querySelector('.bookmarks__list');
  _errorMessage = `No Bookmarks yet. find a neiche`;

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(res => PreviewView.render(res, false)).join('');
  }
}
export default new BookmarksView();
