import Header from './Header';
import Joke from './Joke';
import Button from './Button';
import Footer from './Footer';

function HomePage() {
    return (
        <div>
            <Header />
            <Joke />
            <Button path="/about" text="About Us" style={{ backgroundColor: 'red', }} />
            <Footer />
        </div>
    )
}

export default HomePage
