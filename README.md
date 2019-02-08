# ios-switch-material-ui

A material-ui component which implements a iOS like switch

---

## Props

The component accepts the props defined bellow in the table.

### Props accepted by IosSwitchMaterialUi

| Name             | Type                          | Required | Default   | Description                                                     |
| ---------------- | ----------------------------- | -------- | --------- | --------------------------------------------------------------- |
| aspectRatio      | number                        | no       | 2         | The width/height raport                                         |
| colorKnobOnLeft  | string                        | no       | #eeeeee   | The color of the knob when it is on the left                    |
| colorKnobOnRight | string                        | no       | #5269d8   | The color of the knob when it is on the right                   |
| colorSwitch      | string                        | no       | #e2e2e2   | The color of the switch                                         |
| disabled         | boolean                       | no       | false     | The component is disabled                                       |
| knobOnLeft       | boolean                       | no       | false     | If true, the knob is on the left, othwise on the right          |
| knobSize         | number                        | no       | 18        | The size of the knob                                            |
| onChange         | (knobOnLeft: boolean) => void | no       | undefined | The callback function called when the knob changes its position |

---

## Versions

| IosSwitchMaterialUi _uses_ | Material-ui | React  |
| -------------------------: | :---------: | :----: |
|                      1.0.x |    3.6.0    | 16.6.3 |
|                      1.1.x |    3.9.2    | 16.8.1 |

### About versioning schema used for IosSwitchMaterialUi

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of IosSwitchMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of IosSwitchMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

```js
import * as React from "react";
import IosSwitchMaterialUi from "ios-switch-material-ui";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <IosSwitchMaterialUi
					colorKnobOnLeft="red"
					colorKnobOnRight="blue"
					colorSwitch="aqua"
          onChange={this.handleChange}
        />
      </div>
    );
  }

  handleChange = (knobOnLeft: boolean) => {
    console.log(knobOnLeft);
  };
}

export default App;
```

---

## Changelog

### 1.0.0

- ios-switch-material-ui is made publicly available