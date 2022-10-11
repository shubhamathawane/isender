// import React from "react";
// import styled from "styled-components";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Home } from "./Home";
// import { Send } from "./SendCode";
// import { Receive } from "./Receive";
// import { NavBar } from "./NavBar";

// const Container = styled.div`
//   background-color: #282c34;
//   align-items: center;
//   text-align: center;
//   `;


// const Wrapper = styled.div`
// color: white;
// width: 100%;
// height: 657px;
// `;

// const Box = styled.div`
//   background-color: green;
//   display: block;

// `

// const Button = styled.button`
//   padding: 5px 15px;
//   color: green;
//   /* font-family: "Courier New", Courier, monospace; */
//   border-radius: 15px;
//   margin-top: 15px;
//   margin-left: 38rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 5px;
// `;

// export const Home2 = () => {
//   return (
//     <Container>
//       <Wrapper>
//        {/* <NavBar/> */}
//        <Box>
//           <Link path="/home" element={Home}>Home</Link>
//           <Button>Send</Button>
//           <Button>Receive</Button>
//        </Box>
//       </Wrapper>
//         <Router>
//           <div>
//             <Routes>
//               <Route exact path="/home" element={<Home />} />
//               <Route exact path="/send" element={<Send />} />
//               <Route exact path="/receive" element={<Receive />} />
//             </Routes>
//           </div>
//         </Router>
//     </Container>
//   );
// };
