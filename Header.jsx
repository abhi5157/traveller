 const Header = () =>{
    const mystyle = {
      padding : 30,
      textAlign : "center",
      position :"sticky",
      fontFamily : "Raleway  sans-serif",
      textTransform: "uppercase",
      fontSize : "13px",
      letterSpacing : 20,
      fontWeight : 500,
      color : "#868686",
      background : "#ffff",
      fontSize :"1.5rem",
      marginBottom : 0
  
  //     text-align: "center",
    
  //    font-family: "Raleway","sans-serif",
  //   text-transform: "uppercase",
  //   font-size: 13px,
  //   letter-spacing: 20px,
  //   font-weight: 500,
  //   color :" #868686",
  //   background: "#ffff",
  //   font-size: 1.5rem,
  //  margin-bottom: 30px
    };
  
    return(
      <>
     <h1 className= "heading_style" style={mystyle}>TRAVELLING GUIDE</h1>
      </>
      
    )
  }

  export default Header