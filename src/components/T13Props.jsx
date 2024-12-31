// Props
// • React props (properties) facilitate data transfer from parent to child
// components.
// • Data flows unidirectionally, ensuring a clear direction of information in
// React applications.
// • Props are immutable, meaning child components cannot modify the
// data received from parents.
// • Child components access props through their function parameter
// • You can also pass JSX as props to another component.
// export const Propps = (props) => {
//     return (
//       <li>
//         <div>
//           <div>
//             <img
//               src={props.curele.img_url}
//               alt=""
//               style={{ width: "15%", height: "10%" }}
//             />
//           </div>
  
//           <h1>Name: {props.curele.name}</h1>
//           <h3>Rating: {props.curele.rating}{""}
//            {
//             props.curele.rating>8.2 && (<span style={{color:"green", fontWeight:"bolder"}}>(Highly recommended)</span>)
//            }
//           </h3>
//           <p>Summary: {props.curele.description}</p>
  
//           {/* Display "Unknown" if genre is not provided */}
//           <p>Genre: {props.curele.genre || "Unknown"}</p>
  
//           <a
//             href={props.curele.watch_url}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button>WATCH NOW</button>
//           </a>
//         </div>
//       </li>
//     );
//   };
  
import PropTypes from "prop-types";

export const Propps = (props) => {
  return (
    <li>
      <div>
        <div>
          <img
            src={props.curele.img_url}
            alt=""
            style={{ width: "15%", height: "10%" }}
          />
        </div>

        <h1>Name: {props.curele.name}</h1>
        <h3>Rating: {props.curele.rating}</h3>
        <p>Summary: {props.curele.description}</p>
        <p>Genre: {props.curele.genre || "Unknown"}</p>

        <a
          href={props.curele.watch_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>WATCH NOW</button>
        </a>
      </div>
    </li>
  );
};

// Define PropTypes
Propps.propTypes = {
  curele: PropTypes.shape({
    name: PropTypes.string.isRequired, // name must be a string
    rating: PropTypes.number.isRequired, // rating must be a number
    img_url: PropTypes.string,
    description: PropTypes.string,
    genre: PropTypes.string,
    watch_url: PropTypes.string,
  }).isRequired, // curele object is required
};

export default Propps;


  
  

  