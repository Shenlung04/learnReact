// import ListGroup from "./components/ListGroup";

// function App(){
//   let items = [
//     "lpg",
//     "sby",
//     "kla",
//     "bdg",
//   ];

//   const handleSelectItem = (item: string)=> {
//     console.log(item)
//   }

//   return <div><ListGroup items ={items} heading ="Cities" onSelectItem={handleSelectItem}/></div>
// }

// import Alert from "./components/Alert";
//   function App()
//   {
//     return(
//       <div>
//         <Alert>
//           Hello World
//         </Alert>
        
//       </div>
//     );
//   }

// export default App;

import Button from "./components/button"

function App()
{
  return (
    <div>
      <Button color ="secondary"onClick = {() =>console.log('Clicked') }>
        My Button
      </Button>
    </div>
  )
}

export default App;