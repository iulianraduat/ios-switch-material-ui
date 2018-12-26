import * as React from 'react';
import { isNil, Dictionary, isEmpty, isFunction } from 'lodash';

const defaultColorSwitch: string = '#e2e2e2';
const defaultColorKnobOnLeft: string = '#eeeeee';
const defaultColorKnobOnRight: string = '#5269d8';

const defaultAspectRatio: number = 2;
const defaultKnobSize: number = 18;
const paddingKnob: number = 2;

const styles: Dictionary<React.CSSProperties> = {
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

class IosSwitchMaterialUi extends React.Component<IosSwitchMaterialUiProps> {
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

		return isEmpty(colorSwitch) ? defaultColorSwitch : colorSwitch as string;
	}

	private getSwitchWidth() {
		return this.getAspectRatio() * this.getSwitchHeight();
	}

	private getAspectRatio() {
		const { aspectRatio } = this.props;

		return isNil(aspectRatio) ? defaultAspectRatio : aspectRatio;
	}

	private getSwitchHeight() {
		return this.getKnobSize() + 2 * paddingKnob;
	}

	private getKnobSize() {
		const { knobSize } = this.props;

		return isNil(knobSize) ? defaultKnobSize : knobSize;
	}

	private getStyleForKnob(): React.CSSProperties {
		const { knobOnLeft } = this.props;
		const backgroundColor: string = this.getKnobColor();
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

	private getKnobColor() {
		const { knobOnLeft, colorKnobOnLeft, colorKnobOnRight } = this.props;

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

		if (disabled !== true && isFunction(onChange)) {
			onChange(!this.props.knobOnLeft);
		}
	};
}

interface IosSwitchMaterialUiProps {
	aspectRatio?: number;
	colorKnobOnLeft?: string;
	colorKnobOnRight?: string;
	colorSwitch?: string;
	disabled?: boolean;
	knobOnLeft?: boolean;
	knobSize?: number;
	onChange?: (knobOnLeft: boolean) => void;
}

export default IosSwitchMaterialUi;
