const data = [
  {
    project: "MNIST OpenCV",
    stack: ["opencv", "cnn", "keras"],
    description:
      "Developed a machine learning model to find patterns made by human hand movements.Integrated openCV library allowing users to get live camera feed.Deployed MNIST model for digit recognition made by hands.",
    website:
      "https://www.linkedin.com/posts/munish-grover-a88737138_mnist-opencv-machinelearning-activity-6561634025562304512-byrk",
    github: "https://github.com/MunishGrover/MNIST-and-OpenCV",
    image: "mnistopencv.jpg",
    needs: "Classify digits by writing them in the air with a blue pen.",
    status: "Live"
  },

  {
    project: "Covid Live",
    stack: ["javascript", "d3", "ajax"],
    description:
      "Designed a visualizer to showcase live updates on COVID-19 all over the world.Implemented AJAX calling technique for fetching live data daily.Integrated world map and line graphs by D3.js for interactively showcasing data.",
    website: "https://munishgrover.github.io/covid19vis/",
    github: "https://github.com/MunishGrover",
    needs: "COVID Live Visualizer for researchers and analysts.",
    image: "Screenshot from 2020-04-02 15-34-13.png",
    status: "Live"
  },
  {
    project: "Toiler",
    stack: ["mysql", "express", "node"],
    description:
      "Created a web application that helps to find services near your location.Designed frontend of the application using Bootstrap, HTML5, and CSS3.",
    website: "https://github.com/MunishGrover/Toiler",
    github: "https://github.com/MunishGrover/Toiler",
    image: "Screenshot from 2018-08-27 21-59-09.jpg",
    needs: "Find services near your location.",
    status: "In Development"
  }

  // {
  //   project: "Project XYZ",
  //   stack: ["python", "django"],
  //   description:
  //     "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  //   website: "https://www.google.com",
  //   github: "https://www.github.com",
  //   needs: "People with super powers, semi-super powers, or no powers at all",
  //   image:
  //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
  //   status: "Live"
  // },
  // {
  //   project: "Project X",
  //   stack: ["react", "express", "node"],
  //   description:
  //     "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  //   website: "https://www.google.com",
  //   github: "https://www.github.com",
  //   image:
  //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
  //   needs: "People with super powers",
  //   status: "In Development"
  // },

  // {
  //   project: "Project XYZ",
  //   stack: ["python", "django"],
  //   description:
  //     "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  //   website: "https://www.google.com",
  //   github: "https://www.github.com",
  //   needs: "People with super powers, semi-super powers, or no powers at all",
  //   image:
  //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
  //   status: "Live"
  // }
];

function Layout(props) {
  return React.createElement("div", { className: "row" }, props.children);
}

class Card extends React.Component {
  render() {
    const style = {
      img: {
        maxWidth: "400px"
      }
    };

    return React.createElement(
      "div",
      { className: "col m4" },
      React.createElement(
        "div",
        { className: "card hoverable" },
        React.createElement(
          "div",
          { className: "card-image waves-effect waves-block waves-light" },
          React.createElement("img", {
            style: style.img,
            className: "activator",
            src: this.props.data.image
          })
        ),

        React.createElement(
          "div",
          { className: "card-content" },
          React.createElement(
            "div",
            null,
            React.createElement(StackIcons, { data: this.props.data.stack })
          ),

          React.createElement(
            "span",
            { className: "card-title activator grey-text text-darken-4" },
            this.props.data.project,
            React.createElement(
              "i",
              { className: "material-icons right" },
              "more_vert"
            )
          ),

          React.createElement(
            "div",
            null,
            React.createElement(
              "span",
              null,
              React.createElement(
                "a",
                { href: this.props.data.website, target: "_blank" },
                "Website"
              )
            ),
            React.createElement(
              "span",
              null,
              React.createElement(
                "a",
                {
                  className: "github",
                  href: this.props.data.github,
                  target: "_blank"
                },
                "Github"
              )
            )
          )
        ),

        React.createElement(
          "div",
          { className: "card-reveal" },
          React.createElement(
            "span",
            { className: "card-title grey-text text-darken-4" },
            this.props.data.project,
            React.createElement(
              "i",
              { className: "material-icons right" },
              "close"
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "span",
              { className: "status" },
              this.props.data.status
            )
          ),
          React.createElement("p", null, this.props.data.description),
          React.createElement(
            "p",
            null,
            React.createElement("strong", null, "Need:")
          ),
          React.createElement("p", null, this.props.data.needs)
        )
      )
    );
  }
}

// Note: Empty span tag on line 115 is there as placeholder for
// the custom CSS to inject text based on stack item.
function StackIcons(props) {
  const array = props.data;
  const icons = array.map(item => {
    return React.createElement(
      "div",
      { key: item, className: "icon" },
      React.createElement(
        "span",
        { className: item },
        React.createElement("span", null)
      )
    );
  });
  return React.createElement("div", null, " ", icons, " ");
}

function Projects(props) {
  const projects = [];
  const data = props.data;
  data.forEach(item => {
    projects.push(React.createElement(Card, { data: item }));
  });
  return React.createElement("div", null, projects);
}

ReactDOM.render(
  React.createElement(Layout, {
    children: React.createElement(Projects, { data: data })
  }),
  document.getElementById("root")
);
