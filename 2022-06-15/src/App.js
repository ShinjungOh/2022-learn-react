import './App.css';
import Header from "./header";
import Footer from "./footer";


function App() {
    const style = {
        App: {
            backgroundColor: "black",
        },
        h2: {
            color: "white",
        },
        bold_text: {
            color: "yellow",
        },
    }

    let number = 5;
    let name = "SJ";

    return (
        <div style={style.App}>
            <Header/>
            <h2 style={style.h2}>Hello {name}</h2>
            <b style={style.bold_text} id="bold_text">
                {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
            </b>
            <Footer/>
        </div>
    );
}

export default App;
