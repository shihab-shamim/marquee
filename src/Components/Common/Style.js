import { getBoxCSS, getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { colors,isHover,tickerColors,tickerPadding,tickerIcon,tickerRadius,tickerGap,iconSize} = attributes;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksTestPurpose`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${blockSl} p{
			${getColorsCSS(colors)}
		}
			.scroller-x__list:hover
{
	animation-play-state:${isHover?"paused":"running"}
}
	.tricker{
		${getColorsCSS(tickerColors)}
		padding:${getBoxCSS(tickerPadding)};
		border-radius:${getBoxCSS(tickerRadius)};
		gap:${tickerGap};

	}
		.tricker svg{
		fill:${tickerIcon};
		width:${iconSize};
		height:${iconSize};
		}

	`}} />;
}
export default Style;