import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleOnSelectItem= (item:string) => {
    console.log(item)
  }
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleOnSelectItem}/>
    </div>
  );
}

export default App;
