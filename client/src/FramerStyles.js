// FramerStyles.js

export const container = {
    display: "flex",
    overflow: "hidden",
    height: "100vh"
  };
  
  export const imageWrapper = {
    position: "relative", // Ajouté pour positionner l'animation de survol
    marginRight: "20px",
    width: "200px",
    overflow: "hidden"
  };
  
  export const image = {
    width: "100%",
    height: "100%",
    border: "2px solid black"
  };
  
  export const imageHover = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  };
  
