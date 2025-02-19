import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl
} from "@wordpress/components";
import { ColorControl, ColorsControl, Typography } from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const { tickerColors,tickerPadding,tickerIcon,tickerRadius,tickerGap,iconSize,tickerTypho,tickerSection,containerBg} = attributes;



  return (
    <>
    <PanelBody
    className="bPlPanelBody"
    title={__(" Ticker Section", "b-blocks")}
    initialOpen={false}
    
    >
       <UnitControl
	onChange={ value => setAttributes({tickerSection: value})}
	onUnitChange={ e => console.log("new unit") }
	label="Icon Size"
  units={[{ value: '%', label: '%' }]}
  max={100}
  min={30}

	value={ tickerSection } />

  <ColorControl value={containerBg} label={__("Background Color", "b-blocks")} onChange={(value)=>{
    setAttributes({containerBg: value })
  }} />
      

    </PanelBody>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Ticker", "b-blocks")}
        initialOpen={false}
      >
        <ColorsControl
          value={tickerColors}
          onChange={(val) => setAttributes({ tickerColors: val })}
          defaults={{ color: "black", bg: "#B1C5A4" }}
        />
        <Typography value={tickerTypho} onChange={(value)=>{
          setAttributes({tickerTypho: value })
        }} />
        <BoxControl label="Padding" values={tickerPadding} onChange={(value)=>{
          setAttributes({ tickerPadding: value })
        }} />
        <BoxControl className="mt8" label="Radius" values={tickerRadius} onChange={(value)=>{
          setAttributes({ tickerRadius: value })
        }} />
        <UnitControl
	onChange={ value => setAttributes({tickerGap: value})}
	onUnitChange={ e => console.log("new unit") }
	label="Gap"
  units={[{ value: 'px', label: 'px' }]}

	value={ tickerGap } />

        <ColorControl label="Icon Color" value={tickerIcon} onChange={value=>{
          setAttributes({ tickerIcon: value })
        }} />
         <UnitControl
	onChange={ value => setAttributes({iconSize: value})}
	onUnitChange={ e => console.log("new unit") }
	label="Icon Size"
  units={[{ value: 'px', label: 'px' }]}

	value={ iconSize } />


      </PanelBody>
    </>
  );
};

export default Style;
