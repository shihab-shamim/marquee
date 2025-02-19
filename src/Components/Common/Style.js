import { getBoxCSS, getColorsCSS,getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { colors,isHover,tickerColors,tickerPadding,tickerIcon,tickerRadius,tickerGap,iconSize,tickerTypho,tickerSection,alignment,containerBg} = attributes;

	const mainSl = `#${id}`;
	const tricker = `${mainSl} .tricker`;
	const name = `${tricker} .name`;
	const container=`${mainSl} .container`;
	// .container{
	// 	background-color: rgb(3, 3, 3);
		
	// }
	

	return <style dangerouslySetInnerHTML={{
		
		__html: `
		${getTypoCSS('', tickerTypho)?.googleFontLink}
${getTypoCSS(name, tickerTypho)?.styles}
		
		
			.ticker-scroller-x__list:hover
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
		${container}{
			width:${tickerSection};
			background-color:${containerBg};

			
			}
			.wrapper{
			width:100%;
			display:flex;
			justify-content:${alignment};
			align-items:center;
			}

	`}} />;
}
export default Style;