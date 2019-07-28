import * as React from 'react';

const defaultColorSwitch: string = '#e2e2e2';
const defaultColorKnobOnLeft: string = '#eeeeee';
const defaultColorKnobOnRight: string = '#5269d8';

const defaultAspectRatio: number = 2;
const defaultKnobSize: number = 18;
const paddingKnob: number = 2;

const styles: { [key: string]: React.CSSProperties } = {
  knob: {
    borderRadius: '50%',
    position: 'relative',
    transition:
      'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  switch: {
    display: 'inline-block',
    transition:
      'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  }
};

class IosSwitchMaterialUi extends React.Component<IosSwitchMaterialUiProps, IosSwitchMaterialUiState> {
  constructor(props: IosSwitchMaterialUiProps) {
    super(props);

    this.state = {
      knobOnLeft: props.knobOnLeft || props.defaultKnobOnLeft || false
    };
  }

  public render() {
    return (
      <div onClick={this.handleChange} style={this.getStyleForSwitch()}>
        <div style={this.getStyleForKnob()} />
      </div>
    );
  }

  private getStyleForSwitch(): React.CSSProperties {
    const { disabled } = this.props;

    const backgroundColor: string = this.getSwitchColor();
    const knobSize = this.getKnobSize();
    const switchWidth = this.getSwitchWidth();
    const switchHeight: number = this.getSwitchHeight();

    const css: React.CSSProperties = {
      ...styles.switch,
      backgroundColor,
      borderRadius: knobSize,
      cursor: disabled ? undefined : 'pointer',
      height: switchHeight,
      minHeight: switchHeight,
      minWidth: switchWidth,
      opacity: disabled ? 0.4 : 1,
      top: paddingKnob,
      width: switchWidth
    };

    return css;
  }

  private getSwitchColor() {
    const { colorSwitch } = this.props;

    return isEmpty(colorSwitch) ? defaultColorSwitch : (colorSwitch as string);
  }

  private getSwitchWidth() {
    return this.getAspectRatio() * this.getSwitchHeight();
  }

  private getAspectRatio() {
    const { aspectRatio } = this.props;

    return aspectRatio ? aspectRatio : defaultAspectRatio;
  }

  private getSwitchHeight() {
    return this.getKnobSize() + 2 * paddingKnob;
  }

  private getKnobSize() {
    const { knobSize } = this.props;

    return knobSize ? knobSize : defaultKnobSize;
  }

  private getStyleForKnob(): React.CSSProperties {
    const knobOnLeft = this.isKnobOnLeft();

    const backgroundColor: string = this.getKnobColor(knobOnLeft);
    const knobSize = this.getKnobSize();
    const switchWidth = this.getSwitchWidth();

    return {
      ...styles.knob,
      backgroundColor,
      height: knobSize,
      left: knobOnLeft ? paddingKnob : switchWidth - knobSize - paddingKnob,
      top: paddingKnob,
      width: knobSize
    };
  }

  private getKnobColor(knobOnLeft: boolean) {
    const { colorKnobOnLeft, colorKnobOnRight } = this.props;

    if (knobOnLeft && isEmpty(colorKnobOnLeft) === false) {
      return colorKnobOnLeft as string;
    }

    if (knobOnLeft !== true && isEmpty(colorKnobOnRight) === false) {
      return colorKnobOnRight as string;
    }

    return knobOnLeft ? defaultColorKnobOnLeft : defaultColorKnobOnRight;
  }

  private handleChange = () => {
    const { disabled, onChange } = this.props;

    if (disabled) {
      return;
    }

    const newKnobOnLeft: boolean = !this.isKnobOnLeft();

    if (this.props.knobOnLeft === undefined) {
      this.setState({
        knobOnLeft: newKnobOnLeft
      });
    }

    onChange && onChange(newKnobOnLeft);
  };

  private isKnobOnLeft = (): boolean =>
    this.props.knobOnLeft !== undefined ? this.props.knobOnLeft : this.state.knobOnLeft;
}

const isEmpty = (str?: string): boolean => (str !== undefined && str.length > 0) === false;

interface IosSwitchMaterialUiState {
  knobOnLeft: boolean;
}

interface IosSwitchMaterialUiProps {
  aspectRatio?: number;
  colorKnobOnLeft?: string;
  colorKnobOnRight?: string;
  colorSwitch?: string;
  defaultKnobOnLeft?: boolean;
  disabled?: boolean;
  knobOnLeft?: boolean;
  knobSize?: number;
  onChange?: (knobOnLeft: boolean) => void;
}

export default IosSwitchMaterialUi;
