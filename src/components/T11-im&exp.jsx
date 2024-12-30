export const Netflix= () =>{
    const name="nirmal";//now name , summary and rating is dynamic
    const rating ="7.7";
    const summary="a;slkdjf;lj;ljl";
  
  //3. function calls
  //function, especially those that return jsx, can be invoked directly with in jsx
  
    const genre = () =>{
  const genre="romcom";
  return genre;
    }
  
  //lecture.9> condition value in jsx
  
  //this voilats don't repat yourself 
  let age=15;

  const fage = () =>{
    if(age>=18) return"watch now";
    return"not for you";
  }
  
  

  
    return(
      <div>
      <div>
        <img src="OIP.jfif" alt="iof.jfif" width="30%" height="40%"/>
      </div>
 
     <h1>Name:{name}</h1>
  
  {/* we can perform operation inside {} */}
  <h3>Rating:{4+5}</h3>
  <p>Sumamry:{summary}</p>
  
  {/* function call inside {} */}
  <p>genre:{genre()}</p>
  
  {/* 9.2 */}
  {/* <button>{age>=18? "watch now" : "not available"}</button> */}
  
  <button>{fage()}</button>
  </div>
    )
  }


export default Netflix;

export const Hooter= () =>{
    return  <p>@netflix</p>
  }

export const Footer= () =>{
  return  <p>@netflix</p>
}


// ## ImportExport
// Default
// Export:
// A file can have only one default export.
// Default Import: When importing a default export,you can name the import whatever you like.
// Named Export:
// A file can have multiple named exports.
// Each named export must be explicitly exported.
// Named Import:
// When importing named exports, the import names must match the export names exactly.
// Named imports must be enclosed in curly braces.