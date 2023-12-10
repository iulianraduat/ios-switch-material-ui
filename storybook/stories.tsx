import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import IosSwitchMaterialUi from '../src/IosSwitchMaterialUi';

const style: React.CSSProperties = {
  height: 20,
};

const showSelectedValue = (id: string) => (knobOnLeft: boolean) =>
  (document.getElementById(id)!.textContent = knobOnLeft
    ? 'knobOnLeft'
    : 'knobOnRight');

const meta: Meta<typeof IosSwitchMaterialUi> = {
  title: 'IosSwitchMaterialUi',
  component: IosSwitchMaterialUi,
} as Meta<typeof IosSwitchMaterialUi>;
export default meta;
type Story = StoryObj<typeof IosSwitchMaterialUi>;

export const UncontrolledWithoutKnobPositionSet = () => (
  <div>
    <IosSwitchMaterialUi onChange={showSelectedValue('uncontrolled')} />
    <div style={style} />
    Selected value: <span id="uncontrolled" />
  </div>
);

export const UncontrolledWithKnobPositionSet = () => (
  <div>
    <IosSwitchMaterialUi
      defaultKnobOnLeft={true}
      onChange={showSelectedValue('uncontrolled')}
    />
    <div style={style} />
    Selected value: <span id="uncontrolled" />
  </div>
);

export const Controlled = () => (
  <div>
    <IosSwitchMaterialUi
      knobOnLeft={true}
      onChange={showSelectedValue('controlled')}
    />
    <IosSwitchMaterialUi
      knobOnLeft={false}
      onChange={showSelectedValue('controlled')}
    />
    <div style={style} />
    Selected value: <span id="controlled" />
  </div>
);

export const Disabled = () => (
  <div>
    <IosSwitchMaterialUi
      disabled={true}
      onChange={showSelectedValue('disabled')}
    />
    <div style={style} />
    Selected value: <span id="disabled" />
  </div>
);

export const WithCustomColors = () => (
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
);

export const WithCustomAspectRatio = () => (
  <div>
    <IosSwitchMaterialUi
      aspectRatio={5}
      onChange={showSelectedValue('aspect-ratio')}
    />
    <div style={style} />
    Selected value: <span id="aspect-ratio" />
  </div>
);

export const WithCustomKnobSize = () => (
  <div>
    <IosSwitchMaterialUi
      knobSize={40}
      onChange={showSelectedValue('knob-size')}
    />
    <div style={style} />
    Selected value: <span id="knob-size" />
  </div>
);
