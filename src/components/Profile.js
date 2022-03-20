import React from "react";
class Profile extends React.Component {
  state = {
    fullName: "Vasily Zaitsev",
    bio: "People think Me is this Jude Law person. Doesn't look like me!",
    imgSrc:
      "https://www.cinematheque.fr/media/01-films/stalingrad-jean-jacques-annaud.jpg",
    profession: "i shoot people... often in the head",
    time: 0,
  };

 

  render() {
    const { fullName, bio, imgSrc, profession, time } = this.state;

    return (
      <>
        <img style={{ width: "400px" }} src={imgSrc} />

        <h1>This is {fullName}</h1>
        <h2>{bio}</h2>
        <h2>what i do is simple... </h2>
        <h3>{profession}</h3>
      </>
    );
  }
}

export default Profile;
