import PropTypes from 'prop-types';

//object destructuring
const Header = ({ title }) => {
    return (
        <header className="hdr">
            {/* <h2>Welcome</h2> */}

            {/* inline style */}
            <h2 style={{ color: 'white', backgroundColor: 'red', padding: 23 }}>{title}</h2>

            <h1 style={headerH1Style}>Joke Generator</h1>
        </header>
        //we call this fragment
        // <>
        //     <div>dndlkv</div>
        // </>
    )
}

//using props
// const Header = (props) => {
//     return (
//         <header className="hdr">
//             {/* <h2>Welcome</h2> */}
//             <h2>{props.title}</h2>
//             <h1>Joke Generator</h1>
//         </header>
//         //we call this fragment
//         // <>
//         //     <div>dndlkv</div>
//         // </>
//     )
// }

//default prop is used when we didn't passed any props from the parent
Header.defaultProps = {
    title: 'Welcome All of You'
}

//Prop Types
Header.propTypes = {
    title: PropTypes.string.isRequired
}

//Header Style
const headerH1Style = {
    color: 'red',
    textTransform: 'uppercase'
}

export default Header
