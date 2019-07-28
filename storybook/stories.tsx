import IosSwitchMaterialUi from '../src/IosSwitchMaterialUi';
import React from 'react';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: 20
};

const showSelectedValue = (id: string) => (knobOnLeft: boolean) =>
  (document.getElementById(id).textContent = knobOnLeft ? 'knobOnLeft' : 'knobOnRight');

storiesOf('IosSwitchMaterialUi', module)
  .add('uncontrolled without knob position set', () => (
    <div>
      <IosSwitchMaterialUi onChange={showSelectedValue('uncontrolled')} />
      <div style={style} />
      Selected value: <span id="uncontrolled" />
    </div>
  ))
  .add('uncontrolled with knob position set', () => (
    <div>
      <IosSwitchMaterialUi defaultKnobOnLeft={true} onChange={showSelectedValue('uncontrolled')} />
      <div style={style} />
      Selected value: <span id="uncontrolled" />
    </div>
  ))
  .add('controlled', () => (
    <div>
      <IosSwitchMaterialUi knobOnLeft={true} onChange={showSelectedValue('controlled')} />
      <IosSwitchMaterialUi knobOnLeft={false} onChange={showSelectedValue('controlled')} />
      <div style={style} />
      Selected value: <span id="controlled" />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <IosSwitchMaterialUi disabled={true} onChange={showSelectedValue('disabled')} />
      <div style={style} />
      Selected value: <span id="disabled" />
    </div>
  ))
  .add('with custom colors', () => (
    <div>
      <IosSwitchMaterialUi
        colorKnobOnLeft="red"
        colorKnobOnRight="blue"
        colorSwitch="aqua"
        onChange={showSelectedValue('colors')}
      />
      <div style={style} />
      Selected value: <span id="colors" />
    </div>
  ))
  .add('with custom aspect ratio', () => (
    <div>
      <IosSwitchMaterialUi aspectRatio={5} onChange={showSelectedValue('aspect-ratio')} />
      <div style={style} />
      Selected value: <span id="aspect-ratio" />
    </div>
  ))
  .add('with custom knob size', () => (
    <div>
      <IosSwitchMaterialUi knobSize={40} onChange={showSelectedValue('knob-size')} />
      <div style={style} />
      Selected value: <span id="knob-size" />
    </div>
  ));
