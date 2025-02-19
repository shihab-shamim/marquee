import { getBoxCSS, getColorsCSS,getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { colors,isHover,tickerColors,tickerPadding,tickerIcon,tickerRadius,tickerGap,iconSize,tickerTypho} = attributes;

	const mainSl = `#${id}`;
	const tricker = `${mainSl} .tricker`;
	const name = `${tricker} .name`;

	return <style dangerouslySetInnerHTML={{
		
		__html: `
		${getTypoCSS('', tickerTypho)?.googleFontLink}
${getTypoCSS(name, tickerTypho)?.styles}
		
		
			.scroller-x__list:hover
{
	animation-play-state:${isHover?"paused":"running"}
}
	${tricker}{
		${getColorsCSS(tickerColors)}
		padding:${getBoxCSS(tickerPadding)};
		border-radius:${getBoxCSS(tickerRadius)};
		gap:${tickerGap};

	}
		${tricker} svg{
		fill:${tickerIcon};
		width:${iconSize};
		height:${iconSize};
		}

	`}} />;
}
export default Style;