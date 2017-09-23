import React from 'react';
import ReactDOM from 'react-dom'

// 直接使用 React.createElement 函數
const reactElement = (
  React.createElement('div', { className: 'box' },
    React.createElement('button', { onClick: () => alert('clicked') }, 'click me')
  )
);

// 使用 JSX 語法糖
// const reactElement = (
//   <div className="box">
//     <button onClick={() => alert('clicked')}>click me 123</button>
//   </div>
// )

ReactDOM.render(reactElement, document.getElementById('root'));