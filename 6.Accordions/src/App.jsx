import React from "react";
import { accordionData } from "./utils/component";
import Accordion from "./Accordion";

const App = () => {
  return (
    <div className="accordian">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
};

export default App;
