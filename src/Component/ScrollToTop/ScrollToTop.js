
// // import { useEffect, useState } from "react";

// // export default function ScrollToTop() {
// //   const [isVisible, setIsVisible] = useState(false);

// //   // Top: 0 takes us all the way back to the top of the page
// //   // Behavior: smooth keeps it smooth!
// //   const scrollToTop = () => {
// //     window.scrollTo({
// //       top: 0,
// //       behavior: "smooth"
// //     });
// //   };

// //   useEffect(() => {
// //     // Button is displayed after scrolling for 500 pixels
// //     const toggleVisibility = () => {
// //       if (window.pageYOffset > 500) {
// //         setIsVisible(true);
// //       } else {
// //         setIsVisible(false);
// //       }
// //     };

// //     window.addEventListener("scroll", toggleVisibility);

// //     return () => window.removeEventListener("scroll", toggleVisibility);
// //   }, []);

// //   return (
// //     <div className="scroll-to-top">
// //       {isVisible && (
// //         <div onClick={scrollToTop}>
// //           <h3>Go up!</h3>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// // import { useEffect } from "react";
// // import { useLocation } from "react-router-dom";

// // export default function ScrollToTops() {
// //   const { pathname } = useLocation();

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, [pathname]);

// //   return null;
// // }


// import React, { useEffect, useRef, useState } from "react";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import ListItemText from "@mui/material/ListItemText";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import Checkbox from "@mui/material/Checkbox";
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
// square: true,
// elevation: 1,
// sx: {
//   "&::-webkit-scrollbar": {
//     width: 2,
//   },
//   "&::-webkit-scrollbar-track": {
//     boxShadow: `inset 0 0 1px rgba(0, 0, 0, 0.3)`,
//   },
//   "&::-webkit-scrollbar-thumb": {
//     backgroundColor: "darkgrey",
//     outline: `1px solid slategrey`,
//   },
// },
// style: {
//   maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//   width: 250,
//  },
//  },
// };
// const names = [
//  "Oliver Hansen",
//  "Van Henry",
//  "April Tucker",
//  "Ralph Hubbard",
//  "Omar Alexander",
//  "Carlos Abbott",
//  "Miriam Wagner",
//  "Bradley Wilkerson",
//  "Virginia Andrews",
//  "Kelly Snyder",
// ];

// const ScroollToTop= () => {
// const [personName, setPersonName] = useState([]);

// const handleChange = (event) => {
//  const {
//   target: { value },
// } = event;
// setPersonName(
//   // On autofill we get a stringified value.
//   typeof value === "string" ? value.split(",") : value
// );
// };
// return (
// <div
//   className="max-h-screen "

// >
 
//   <div>
//     <FormControl sx={{ width: 280 }}>
//       <Select
//         labelId="demo-multiple-checkbox-labeaaal"
//         id="demo-multiple-checkbox66"
//         multiple
//         value={personName}
//         onChange={handleChange}
//         placeholder="select style"
//         input={<OutlinedInput size="small" sx={{ borderRadius: "8px" }} />}
//         renderValue={(selected) => {
//           if (selected.length === 0) {
//             return <em>Placeholder</em>;
//           }

//           return selected.join(", ");
//         }}
//         displayEmpty
//         MenuProps={MenuProps}
//         // inputProps={{ "aria-label": "Without label" }}
//         sx={{
//           "&::-webkit-scrollbar": {
//             width: 1,
//           },
//           "&::-webkit-scrollbar-track": {
//             boxShadow: `inset 0 0 1px rgba(0, 0, 0, 0.3)`,
//           },
//           "&::-webkit-scrollbar-thumb": {
//             backgroundColor: "darkgrey",
//             outline: `1px solid slategrey`,
//           },
//         }}
//       >
//         {names.map((name) => (
//           <MenuItem
//             key={name}
//             value={name}
//             sx={{
//               padding: "0px",
//               fontFamily: "Inter",
//               fontStyle: "normal",
//               fontWeight: "400",
//               fontSize: "14px",
//               lineHeight: "20px",
//             }}
//           >
//             <Checkbox
//               size="small"
//               checked={personName.indexOf(name) > -1}
//             />
//             <ListItemText primary={name} />
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   </div>
// </div>
//  );
// };

// export default ScroollToTop;