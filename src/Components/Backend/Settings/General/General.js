import { __ } from '@wordpress/i18n';

import { FormToggle, PanelBody, SelectControl } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';
import { Label } from '../../../../../../bpl-tools/Components';


const General = ({ attributes, setAttributes }) => {
  const { trickers,isHover} = attributes;


  

  return (
   <>
    <PanelBody className='bPlPanelBody' title={__('Tickers', 'b-blocks')} initialOpen={false}>

      {
        trickers.map((tracker, index) =><PanelBody key={index} className='bPlPanelBody' title={__(`Ticker-${index+1}(${tracker.name})`, 'b-blocks')} initialOpen={false} >

<div className="button-container">
  <button
  onClick={()=>{
    const newTrickers = [...trickers];
    const updatedTrickers=newTrickers.filter((__,i)=>i !==index)
    setAttributes({ trickers: updatedTrickers });
  }}
   className="button delete-btn">Delete Ticker</button>
  <button 
 onClick={() => {
  const updatedTrickers = [...trickers];
  const tickerToDuplicate = updatedTrickers[index]; 
  updatedTrickers.splice(index + 1, 0, tickerToDuplicate); 
  setAttributes({ trickers: updatedTrickers });
}}
   className="button duplicate-btn">Duplicate Ticker</button>
</div>

        </PanelBody>
  )
      }
      

      
    <button
    onClick={()=>{
      const newTicker={
        name: 'New Ticker',
        icon:"<svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512'  xmlns='http://www.w3.org/2000/svg'><path d='M25.45 63.043l-4.364 17.463 8.73 2.18L90.44 97.846l29.402 44.1 62.44 187.32-36.845 73.693h17.827c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14h102.528c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14H393v-18H174.562l23-46h192.924l70-210h-327.67L101.56 82.07 34.183 65.227l-8.733-2.184zm115.038 83.914H231v46h-75.178l-15.334-46zm108.512 0h78v46h-78v-46zm96 0h90.512l-15.334 46H345v-46zm-183.18 64H231v46h-53.846l-15.334-46zm87.18 0h78v46h-78v-46zm96 0h69.18l-15.334 46H345v-46zm-161.846 64H231v46h-32.514l-15.332-46zm65.846 0h78v46h-78v-46zm96 0h47.846l-15.332 46H345v-46zm-153 128c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14zm160 0c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14z'></path></svg>"
      }
      const updateTricker=[...trickers,newTicker]
      // setAttributes({trickers:[...trickers,newTicker]})
      setAttributes({trickers:updateData(trickers, updateTricker)})
    }}
    

     className="add-ticker-btn"> + Add Ticker</button>

    </PanelBody>

    <PanelBody className='bPlPanelBody' title={__('Options', 'b-blocks')} initialOpen={false} >
      <Label>Mouse Hover Animation Stop   <FormToggle
  
    
	checked={ isHover }
	onChange={ () => setAttributes({isHover:!isHover}) }
/> </Label>
  



    </PanelBody>
   </>
  )
}

export default General