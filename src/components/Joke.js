import { useEffect, useState, useRef } from 'react';
import Button from './Button';

function Joke() {

    let name = "Kamal";

    const clickFunc = (e) => {
        console.log("Clicked");
        console.log(e.clientY);
    }

    //Generate random color
    const getRandomColor = () => {
        let x = '';
        while (x.length < 6) {
            x += (Math.random()).toString(16).substr(-8).substr(-4);
        }
        return '#' + x;
    }

    //useState
    //=========
    const [joke, setJoke] = useState('');

    const getJoke = () => {
        //fetch APT
        fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return Error('Something went wrong!!');
            }
        }).then((data) => {
            setJoke(data.joke);
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })

        currJoke.current.style.backgroundColor = getRandomColor();
    }

    //useEffect
    //=========
    useEffect(() => {
        getJoke();
    }, []);


    //useRef
    const currJoke = useRef();
    console.log(currJoke.current);


    // function abc() {
    //     name = "Sandun";
    // }


    return (
        <div ref={currJoke} className="card">
            {/* <h2>This is a {name}</h2> */}
            <h2>{joke}</h2>
            {/* <Button text="Generate new Joke" style={{
                backgroundColor:
                    'black'
            }}
                clickBtn={abc} /> */}
            {/* <Button text="Generate new Joke" style={{
                backgroundColor:
                    'black'
            }}
                clickBtn={clickFunc} /> */}
            <Button text="Generate new Joke" style={{
                backgroundColor:
                    'black'
            }}
                clickBtn={getJoke} />
        </div>
    )
}

export default Joke