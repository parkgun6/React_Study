import './App.css';

function App() {

  const product = {
    pno: 1,
    name: 'Apple',
    price: 3000
  }

  const clickHandler = (value) => {
    alert("SUBJECT: " + value)
  }
  return (
    <div>

      <ChildEx>
      <ProductDisplay {...product}></ProductDisplay>
      </ChildEx>
      <Hello name={'Java'} fn={clickHandler}></Hello>
      <Hello name={'C#'} fn={clickHandler}></Hello>
      <Hello name={'JS'} fn={clickHandler}></Hello>
      <Hello name={'Cotlin'} fn={clickHandler}></Hello>
      <Hello name={'Python'} fn={clickHandler}></Hello>
    </div>
  );
}

export default App;
