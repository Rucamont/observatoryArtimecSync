// import React from "react";
// import Logo from "../resources/LogoMIT.png";
// import "./css/navbar.css";
// const Header = () => {
//   return (
//     <nav className="navbar" role="navigation" aria-label="main navigation" style={{ display: 'flex', alignItems: 'start' }}>
//       <div className="navbar-brand">
//         <a
//           role="button"
//           className="navbar-burger burger"
//           aria-label="menu"
//           aria-expanded="false"
//           data-target="navbarBasicExample"
//         >
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//         </a>
//       </div>
//       <div id="navbarBasicExample" className="navbar-menu">
//         <div className="navbar-start">
//           {/* Logotipo */}
//           <a href="/" className="navbar-item-logo">
//             <img
//               className="img-responsive"
//               src={Logo}
//               alt="Logo"
//               style={{ maxWidth: '13%', height: 'auto' }}
//             />
//           </a>
          
//           {/* Explora */}
//           <a href="/explora" className="navbar-item">
//             Explora
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React from 'react'; 
import { Navbar, Nav } from 'react-bootstrap'; 
import Logo from "../resources/LogoMIT.png";

function Header() { 
	const logoUrl = 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png'; 

	return ( 
		<Navbar bg="dark" expand="lg"
				variant="dark"
				className="container-fluid"> 
			<Navbar.Brand href="#home"> 
				<img src={Logo} 
					width="auto" height="60vh"
					alt="Logo" /> 
				
			</Navbar.Brand> 
			<Navbar.Toggle 
				aria-controls="basic-navbar-nav" /> 
			<Navbar.Collapse 
				id="basic-navbar-nav"> 
				<Nav className="ml-auto"> 
					<Nav.Link href="#pick"> 
						Explora 
					</Nav.Link> 
					<Nav.Link href="#suggest"> 
						Suggest Article 
					</Nav.Link> 
					<Nav.Link href="#write"> 
						Write an Article 
					</Nav.Link> 
				</Nav> 
			</Navbar.Collapse> 
		</Navbar> 
	); 
} 

export default Header;
