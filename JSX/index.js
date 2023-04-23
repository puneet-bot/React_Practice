function sum(){
    return 2+2;
}
function App(){
    const name = "Demo";
        const age = 18;
        const hobby = "JavaScript";
        const isMarried = false;
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return <><h1>Demo's Basic Info:</h1>
    <ul>
        <li>{age}</li>
        <li>{hobby}</li>
        <li>{isMarried.toString()}</li>
        <li>{sum()}</li>
    </ul>
    {numbers.map((num)=>(
            <h2>{num}</h2>
            ))}
        
    </>
}

const Login=()=>{
    return <>
    <form>
        <input id="email" type="email" name="email" placeholder="email:" />
        <input id="password"type="password" name="password" placeholder="password:" />
        <input type="submit" />
    </form>
    </>
}

const CheckLogin = () => {
    const isLoggedIn = true;

    return isLoggedIn ? <Home /> : <Login />;
  };

const Home =()=>{
    return <>
        <h1>Hello!</h1>
    </>
}

function Inventory(){
    const itemsSold = [
        { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
        { id: 2, name: "iPad Pro", price: 800, qty: 18 },
        { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
        { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
        { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 }
      ];
      let revenue = 0;
itemsSold.forEach((item) => {
  revenue += item.price * item.qty;
});
      return <>
        <table border="1">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
            {itemsSold.map((item)=>(

            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
            </tr>
      ))}

            </tbody>

            <tfoot>
            <tr>
                <td>Revenue</td>
                <td colSpan="3">{revenue}</td>
            </tr>
            </tfoot>
        </table>
                
      </>
}

ReactDOM.createRoot(document.getElementById("root")).render(<CheckLogin />)

