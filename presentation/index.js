// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#C0C0C0",
  quarternary: "orange"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary" >
            OCaml for the Skeptics
          </Heading>
          <br/>
          <img style={{ display: "inline-block" }} src={require("../assets/ocaml.png")} width="50%" height="50%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="black" caps>Renderforest</Heading>
          <img style={{ display: "inline-block" }} src={require("../assets/renderforest_logo.png")} width="80%" height="80%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textSize="rem" textColor="tertiary">
            <Text textSize="5rem">👦🏻</Text>
            JS Developer
          </Heading>
          <br />
          <Text>
            <b>Facebook</b>:<span style={{ color: "orange" }}>
              {" "}
              <b>narek.hovh</b>
            </span>
          </Text>
          <Text>
            <b>GitHub</b>:<span style={{ color: "orange" }}>
              {" "}
              <b>github.com/narekhovhannisyan</b>
            </span>
          </Text>
          <Text>
            <b>Email</b>:<span style={{ color: "orange" }}>
              {" "}
              <b>narekgilmour@gmail.com</b>
            </span>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="quarternary" caps>Hybrid vigor</Heading>
          <br/>
          <img src={require("../assets/hybrid.png")} width="60%" height="60%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="quarternary" caps>Mix and match paradigms at will</Heading>
          <img src={require("../assets/haskell.png")} width="20%" height="20%"/>
          <img src={require("../assets/java.png")} width="20%" height="20%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="quarternary" caps>Extremely efficient implementation</Heading>
          <img style={{ display: "inline-block" }} src={require("../assets/perl.png")} width="40%" height="40%"/>
          <img style={{ display: "inline-block" }} src={require("../assets/python.png")} width="40%" height="40%"/>
          <img style={{ display: "inline-block" }} src={require("../assets/tcl-script.png")} width="15%" height="15%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="quarternary" caps>Extremely efficient implementation</Heading>
          <List>
            <ListItem bold>They are fast but ...</ListItem>
            <ListItem>Not scaling as your users push its boundaries? 😏</ListItem>
            <ListItem bold>Basically as fast as C.</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" >
          <Heading textColor="quarternary" size={3} caps>Strong static typing with type inference 💪🏻</Heading>
          <List>
            <ListItem bold> Strong Static typed</ListItem>
            <ListItem> Type inference</ListItem>
            <ListItem> Static scope (functions inside functions)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" >
          <Heading textColor="quarternary" size={6}>list of strings with two elements (Java)</Heading>
          <img style={{ display: "inline-block" }} src={require("../assets/java_type_code.png")} width="100%" height="100%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" >
          <Heading textColor="quarternary" size={6}>list of strings with two elements (o'Caml)</Heading>
          <img style={{ display: "inline-block" }} src={require("../assets/ocaml_type_code.png")} width="80%" height="80%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="quarternary">
          <Heading size={1} textColor="secondary" caps>Single-file Deployment 😇</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" >
          <Heading textColor="quarternary" size={4} caps>Dont need to install or upgrade... 🦖</Heading>
          <List>
            <ListItem> a complete programming language interpreter</ListItem>
            <ListItem> all the third-party libraries needed by your application</ListItem>
            <ListItem> your application </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="quarternary">
          <Heading size={1} textColor="secondary" caps>You can ask how? 🤔</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" >
          <Heading textColor="quarternary" size={4} caps>Extensive Libraries 📚</Heading>
          <List>
            <ListItem> data structures</ListItem>
            <ListItem> POSIX system calls</ListItem>
            <ListItem> networking primitives, databases and much more...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" >
          <Heading textColor="quarternary" size={2} caps>Here comees.... 🥁</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" >
          <img style={{ display: "inline-block" }} src={require("../assets/fb.png")} width="20%" height="20%"/>
          <img style={{ display: "inline-block" }} src={require("../assets/flow-typed-logo.png")} width="50%" height="50%"/>
          <img style={{ display: "inline-block" }} src={require("../assets/hack_lang.png")} width="20%" height="20%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" >
          <Heading textColor="quarternary" size={4} caps>Why did facebook use O’Caml to build hack and flow?</Heading>
          <List>
            <ListItem> define your own datatypes</ListItem>
            <ListItem> and then pattern matching on them</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" >
          <Heading textColor="quarternary" size={4} caps>Pattern Matching 🐉</Heading>
          <img style={{ display: "inline-block" }} src={require("../assets/pattern_ocaml.png")} width="70%" height="70%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" >
          <Heading textColor="quarternary" size={2} caps>Syntax Extension 😎</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" >
          <Heading textColor="quarternary" size={2} caps>Portability 🤗</Heading>
          <img style={{ display: "inline-block" }} src={require("../assets/linux.png")} width="20%" height="20%"/>
          <img style={{ display: "inline-block" }} src={require("../assets/mac.png")} width="20%" height="20%"/>
          <img style={{ display: "inline-block" }} src={require("../assets/windows.png")} width="20%" height="20%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="secondary">
          <BlockQuote>
            <Quote>Maybe your feature is in o'Caml?</Quote>
            <Cite textColor="secondary">Me 🧙</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <img style={{ display: "inline-block" }} src={require("../assets/renderforest_logo.png")} width="80%" height="80%"/>
          <Heading size={4} textColor="black" caps>Thank You </Heading>
        </Slide>
      </Deck>
    );
  }
}
