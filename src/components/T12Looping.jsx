import Data from "../api/Data.json";
import  {Propps}  from "./T18-CSS";
export const Netflix = () => {
  return (
    <ul className="grid grid-three--cols">
      {Data.map((curele) => (

<Propps key={curele.id} data={curele} />
      ))}
    </ul>
  );
};

export default Netflix;

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
