import ReactDOM from 'react-dom';

export const Portal = ({ children }) => {
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el);
};
