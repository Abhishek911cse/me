import React from "react";

function About(props) {
  const aboutMeTitle = "Hi👋! I'm Abhishek Ramasubramanian";
  const aboutMeContent = `Lectus arcu bibendum at varius vel pharetra. Nibh sed pulvinar 
  proin gravida hendrerit. Ullamcorper morbi tincidunt ornare massa eget egestas purus. 
  A condimentum vitae sapien pellentesque. Sit amet justo donec enim diam vulputate. Justo
   nec ultrices dui sapien eget. Orci phasellus egestas tellus rutrum tellus pellentesque 
   eu tincidunt. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Quisque 
   sagittis purus sit amet volutpat consequat mauris nunc. Velit egestas dui id ornare arcu
    odio ut sem. Arcu cursus euismod quis viverra nibh cras. Sit amet risus nullam eget felis eget.`;
  return (
    <div id="about">
      <h2>About</h2>
      <div style={{ display: "inline-block", width: "50%" }}>
        <h3>{aboutMeTitle}</h3>
        <p>{aboutMeContent}</p>
      </div>
      <div style={{ width: "50%", float: "right" }}></div>
    </div>
  );
}

export default About;
