// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
// import { computed } from "mobx";
import Select from "react-select";

import { ENIGMA_I_REFLECTOR_OPTIONS } from "../../constants";

// Store
import { Store } from "../../store";

// Component props
interface IProps {
  store: Store;
}

/**
 * EnigmaOneReflector
 */
@observer
export class EnigmaOneReflector extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  // Handle Enigma reflector change
  onReflectorChange = (event: any) => {
    const store = this.props.store;
    store.ENIGMA_I_REFLECTOR = store.getReflectorObjectByName(event.value);
  };

  render() {
    const store = this.props.store;

    return (
      <>
        <div className="row mb-3">
          <div className="col-md-12 mb-3">
            <small>
              <code className="setting-title">REFLECTOR</code>
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
              defaultValue={ENIGMA_I_REFLECTOR_OPTIONS[0]}
              options={ENIGMA_I_REFLECTOR_OPTIONS}
              onChange={this.onReflectorChange}
            />
          </div>
        </div>
      </>
    );
  }
}
