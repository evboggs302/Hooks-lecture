// import React, { Component } from "react";
import React, { useEffect, useState } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//   }
//   render() {
//     return (
//       <div>
//         {this.state.count}
//         <button
//           onClick={() =>
//             this.setState({
//               count: (this.state.count += 1)
//             })
//           }
//         >
//           Increment
//         </button>
//         <button
//           onClick={() =>
//             this.setState({
//               count: (this.state.count -= 1)
//             })
//           }
//         >
//           Decrement
//         </button>
//       </div>
//     );
//   }
// }

export default function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    //this is runing everytime the component is re-rendering
    document.title = count;
  });

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
