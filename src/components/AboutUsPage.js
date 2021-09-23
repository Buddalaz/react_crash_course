import Button from './Button';
import Footer from './Footer';

function AboutUsPage() {
    return (
        <>
            <div className="about">
                <h1>About US</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Adipisci, quae facere. Veritatis mollitia
                    magnam porro rem inventore corrupti repellendus
                    ratione, totam odit. Perferendis, recusandae quaerat
                    maxime unde eligendi ex ut.</p>
                <Button path="/" text="Back To Home" style={{
                    backgroundColor:
                        'green'
                }} />
            </div>
            <Footer />
        </>
    )
}

export default AboutUsPage
