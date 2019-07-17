// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import { ENIGMA_M4_EXTRA_WHEEL_OPTIONS } from "../../constants";

// Store
import { Store } from "../../store";

// Component props
interface IProps {
  store: Store;
}

/**
 * EnigmaM4ExtraWheel
 */
@observer
export class EnigmaM4ExtraWheel extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  onExtraWheelChange = (event: any) => {
    let store = this.props.store;
    store.M4_EXTRA_WHEEL = store.getExtraWheelObjectByName(event.value);
  };

  render() {
    let store = this.props.store;

    return (
      <>
        <div className="row">
          <div className="col-md-12 mb-3">
            <small>
              <code className="info">EXTRA WHEEL (Zusatzwalze)</code>
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
              defaultValue={ENIGMA_M4_EXTRA_WHEEL_OPTIONS[0]}
              options={ENIGMA_M4_EXTRA_WHEEL_OPTIONS}
              onChange={this.onExtraWheelChange}
            />
          </div>
        </div>
      </>
    );
  }
}
