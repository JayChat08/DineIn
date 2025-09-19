import View from './View.js';
import PreviewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
class ResultsView extends View {
  _parentELement = document.querySelector('.results');
  _errorMessage = `No recipes found`;
  _generateMarkup() {
    return this._data.map(res => PreviewView.render(res, false)).join('');
  }
}
export default new ResultsView();
