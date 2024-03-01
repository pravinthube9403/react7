import moviesData from "./data";
import Movies from "./Movies";
import actionMovies from "./data2";
function App ()
{
  return (
    <div className='main'>
      <div className="app">
      
    {
      
      moviesData.map((m) => (
        
        <Movies url={m.image} title={m.title} />
        ))
      }
    </div>
    <div className="app">
     
    {
      actionMovies.map((m) => (
        <Movies url={m.image} title={m.title} />
        ))
      }
      </div>

</div>
  )
}
export default App;



// import Movies from "./Movies";
// import { Component } from "react";
// import actionMovies from "./data2";
// class App extends Component
// {
//   render ()
//   {
//     return (
// 			<div className='app'>
// 				<h1>Hello world</h1>
				
//         <Movies />
// 			</div>
// 		) 
//   }
// }
// export default App