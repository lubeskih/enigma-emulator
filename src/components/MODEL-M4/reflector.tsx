// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import { ENIGMA_M4_REFLECTOR_OPTIONS } from "../../constants";

// Store
import { Store } from "../../store";

// Component props
interface IProps {
  store: Store;
}

/**
 * EnigmaM4Reflector
 */
@observer
export class EnigmaM4Reflector extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  // Handle Enigma reflector change
  onReflectorChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_M4_REFLECTOR = store.getReflectorObjectByName(event.value);
  };

  render() {
    let store = this.props.store;

    return (
      <>
        <div className="row mb-4">
          <div className="col-md-12 mb-3">
            <small>
              <code className="info">Reflector</code>
            </small>
            <Select
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "lightgray",
                  primary: "#2b303b"
                }
              })}
              className="enigma-type"
              isDisabled={store.settingsAreLocked}
              defaultValue={ENIGMA_M4_REFLECTOR_OPTIONS[0]}
              options={ENIGMA_M4_REFLECTOR_OPTIONS}
              onChange={this.onReflectorChange}
            />
          </div>
        </div>
      </>
    );
  }
}
