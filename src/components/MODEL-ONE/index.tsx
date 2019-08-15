// Libraries
import React, { Component } from "react";

// Store
import { Store } from "../../store";

// Selects
import { EnigmaOneFastRotor } from "./fast-rotor";
import { EnigmaOneMiddleRotor } from "./middle-rotor";
import { EnigmaOneSlowRotor } from "./slow-rotor";
import { EnigmaOneReflector } from "./reflector";

// Internal
import { FIVE_ROTOR_OPTIONS } from "../../constants";
import DraggableRotor from "../draggable-rotor";

interface IProps {
  store: Store;
}

export class EnigmaModelOneSettings extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    let store = this.props.store;

    return (
      <>
        <RenderRotors store={store} />
        <EnigmaOneFastRotor store={store} />
        <EnigmaOneMiddleRotor store={store} />
        <EnigmaOneSlowRotor store={store} />
        <EnigmaOneReflector store={store} />
      </>
    );
  }
}

interface IRenderRotors {
  store: Store;
}

const RenderRotors: React.FC<IRenderRotors> = ({ store }) => {
  return (
    <>
      <small>
        <code className="info">Choose a rotor</code>
      </small>
      <div className="rotors">
        {FIVE_ROTOR_OPTIONS.map(rotor => (
          <DraggableRotor store={store} id={rotor.id} name={rotor.name} />
        ))}
      </div>
    </>
  );
};
