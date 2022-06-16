import './App.css';
import Header from "./header";
import Footer from "./footer";
import Counter from "./counter";
import Container from "./container";


function App() {
    const counterProps = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
    }

    return (
        <Container>
            <div>
                <Header/>
                <Counter {...counterProps}/>
                <Footer/>
            </div>
        </Container>
    );
}

export default App;
