 
// import PropTypes from "prop-types";

export const Propps = ({data}) => {
    const {img_url,name,rating,description,genre,watch_url}=data;
  return (
    <li>
      <div>
        <div>
          <img
            src={img_url}
            alt=""
            style={{ width: "15%", height: "10%" }}
          />
        </div>

        <h1>Name: {name}</h1>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre || "Unknown"}</p>

        <a
          href={watch_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>WATCH NOW</button>
        </a>
      </div>
    </li>
  );
};



export default Propps;


  
  
// // question 1
// const UserProfile = (props) => {
//     return <p>User: {props.username}, Age: {props.age}</p>;
//   };

// //   answer
// const UserProfile = (username,age) => {
//     return <p>User: {username}, Age: {age}</p>;
//   };
  
// //   question 5
// const Product = (props) => {
//     return <p>Product: {props.details.name}, Price: {props.details.price}</p>;
//   };
// //  answer 5
// const product =({details})=>{
//     const{name,price}=details;
//     return(
//         <P>product:{name},price:{price}</P>
//     )
// }  