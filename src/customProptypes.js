/* import PropTypes from 'prop-types' */
import ReactDOM from 'react-dom'

function customValidator(props,propName,componentName){
  if(props[propName].length !== 3){
    return new Error(
      'Invalid prop `'+ propName + '` supplied to' +
      ' `' + componentName + '`. Length is not 3.'
    );
  }
}

const CustomTest = ({myCustomProp}) => (
  <span>{myCustomProp}</span>
)

CustomTest.propTypes = {
  myCustomProp: customValidator
}
  


ReactDOM.render(<CustomTest myCustomProp="hey jude"/>, document.querySelector('#root'));