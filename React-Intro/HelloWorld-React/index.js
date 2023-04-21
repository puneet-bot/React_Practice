// const reactHeading = React.createElement("h1",{className:"heading"},"Hello React!")
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading)


// const reactImg = React.createElement("img",{className:"imgTag",src:"https://files.codingninjas.in/coding-ninjas-24647.png"})
// ReactDOM.createRoot(document.getElementById("root")).render(reactImg)

// JSX
// const reactJSX = (<><h1>Hello React with JSX</h1><p>This is created using JSX</p></>)
// ReactDOM.createRoot(document.getElementById("root")).render(reactJSX)

function App(){
    return <><h1>Hello React with JSX</h1><p>This is created using JSX</p><br /> <Assignment /></>
}
let  Assignment=()=>( <>
        <h1>React Project</h1>
        <p>Skills used to make this project</p>
        <ul>
            <li>HTML</li>
            <li>javaScript</li>
            <li>CSS</li>
        </ul>
    </>)

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
// ReactDOM.createRoot(document.getElementById("root")).render(<Assignment />)

