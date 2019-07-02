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

  //useEffect is runing everytime the component is re-rendering. the second argument is what this func is looking for changes on. Once count changes, useEffect will run. You can use AS MANY useEffect funcs as you want. if the second argument is empty, it will run continuously when something changes
  useEffect(() => {
    document.title = count;
  }, [count]);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     console.log("interval started");
  //   }, 1000);

  //   return () => {
  //     console.log("component unmounted");
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
