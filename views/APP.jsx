const Main = ()=>{
    let initialState = 0;
    let [i, setCounter ] =  React.useState(initialState)

    console.log(i);
    return (
        <div className="main-content">
            <h1>Counter app</h1>
            <hr />
            <p>{i}</p>
            <button className="btn btn-success " onClick={ ()=> setCounter(i++) }>+</button>
            <button className="btn btn-warning mx-2" onClick={()=> setCounter(initialState)}>Reset</button>
            <button className="btn btn-danger mx-2" onClick={()=> setCounter(i--)}>-</button>
        </div>
    )
}


const App = () =>{

return <Main />
}


const htmlElement = document.querySelector('#root')
ReactDOM.render(<Main />, htmlElement);