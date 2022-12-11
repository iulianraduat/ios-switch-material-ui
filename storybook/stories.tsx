import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import IosSwitchMaterialUi from '../src/IosSwitchMaterialUi';

const style: React.CSSProperties = {
  height: 20,
};

const showSelectedValue = (id: string) => (knobOnLeft: boolean) =>
  (document.getElementById(id)!.textContent = knobOnLeft
    ? 'knobOnLeft'
    : 'knobOnRight');

export default {
  title: 'IosSwitchMaterialUi',
  component: IosSwitchMaterialUi,
} as ComponentMeta<typeof IosSwitchMaterialUi>;

export const UncontrolledWithoutKnobPositionSet: ComponentStory<
  typeof IosSwitchMaterialUi
> = () => (
  <div>
    <IosSwitchMaterialUi onChange={showSelectedValue('uncontrolled')} />
    <div style={style} />
    Selected value: <span id="uncontrolled" />
  </div>
);

export const UncontrolledWithKnobPositionSet: ComponentStory<
  typeof IosSwitchMaterialUi
> = () => (
  <div>
    <IosSwitchMaterialUi
      defaultKnobOnLeft={true}
      onChange={showSelectedValue('uncontrolled')}
    />
    <div style={style} />
    Selected value: <span id="uncontrolled" />
  </div>
);

export const Controlled: ComponentStory<typeof IosSwitchMaterialUi> = () => (
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

export const Disabled: ComponentStory<typeof IosSwitchMaterialUi> = () => (
  <div>
    <IosSwitchMaterialUi
      disabled={true}
      onChange={showSelectedValue('disabled')}
    />
    <div style={style} />
    Selected value: <span id="disabled" />
  </div>
);

export const WithCustomColors: ComponentStory<typeof IosSwitchMaterialUi> =
  () => (
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

export const WithCustomAspectRatio: ComponentStory<typeof IosSwitchMaterialUi> =
  () => (
    <div>
      <IosSwitchMaterialUi
        aspectRatio={5}
        onChange={showSelectedValue('aspect-ratio')}
      />
      <div style={style} />
      Selected value: <span id="aspect-ratio" />
    </div>
  );

export const WithCustomKnobSize: ComponentStory<typeof IosSwitchMaterialUi> =
  () => (
    <div>
      <IosSwitchMaterialUi
        knobSize={40}
        onChange={showSelectedValue('knob-size')}
      />
      <div style={style} />
      Selected value: <span id="knob-size" />
    </div>
  );
