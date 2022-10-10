import React, { Component } from "react";
import Particles from "react-particles";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    //   color: {
    //     value: "#ffffff"
    //   },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },

    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 40,
        size_min: 0.1,
        sync: true,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
};
// {
//   //customize this to your liking
//   particles: {
//     number: {
//       value: 100,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     },
//     interactivity: {
//       detect_on: "window",
//       events: {
//           onhover: {
//               "enable": true,
//               "mode": "bubble"
//           },
//           onclick: {
//               "enable": true,
//               "mode": "bubble"
//           },
//           "resize": true
//       }
//   }
// }
// }

const initialState = {
  input: "",
  error: "",
  imageUrl: "",
  boxes: [],
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateFaceLocation = (data) => {
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    const boxes = [];
    if (data?.outputs?.length) {
      for (const output of data.outputs) {
        for (const region of output.data.regions) {
          const {
            left_col: leftCol,
            top_row: topRow,
            right_col: rightCol,
            bottom_row: bottomRow,
          } = region.region_info.bounding_box;

          boxes.push({
            leftCol: leftCol * width,
            topRow: topRow * height,
            rightCol: width - rightCol * width,
            bottomRow: height - bottomRow * height,
          });
        }
      }
    }

    return boxes;
  };

  displayFaceBox = (boxes) => {
    this.setState({ boxes });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onError = (err) => {
    console.log(err);
    this.setState({ error: err.message });
  };

  onButtonSubmit = () => {
    let url = "";
    try {
      url = new URL(this.state.input);

      this.setState({ imageUrl: url.href, error: "" }, () => {
        fetch("https://obscure-bastion-20348.herokuapp.com/imageurl", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            input: this.state.imageUrl,
          }),
        })
          .then(async (response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw Error(await response.json());
            }
          })
          .then((response) => {
            if (response) {
              fetch("https://obscure-bastion-20348.herokuapp.com/image", {
                method: "put",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  id: this.state.user.id,
                }),
              })
                .then((response) => {
                  if (response.ok) {
                    return response.json();
                  } else {
                    throw Error("There was an error");
                  }
                })
                .then((count) => {
                  this.setState(
                    Object.assign(this.state.user, { entries: count })
                  );
                })
                .catch(this.onError);
            }
            this.displayFaceBox(this.calculateFaceLocation(response));
          })
          .catch(this.onError);
      });
    } catch (err) {
      this.setState({ error: "Invalid URL" });
    }
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route });
  };

  render() {
    const { isSignedIn, imageUrl, route, boxes } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
              error={this.state.error}
            />
            <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
