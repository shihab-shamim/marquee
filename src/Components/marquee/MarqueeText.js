import { RichText } from '@wordpress/block-editor';
import { updateData } from '../../../../bpl-tools/utils/functions';
const MarqueeText = ({ attributes ,isShow,setAttributes}) => {
  const { trickers } = attributes;
  

  return (
    <div className="blend-x container">
      <div className="container-fluid container-max">
        <div className="row">
          <div className="col-12">
            <div
              className="scroller-x mb-4"
              data-direction="right"
              data-speed="slow"
            >
              <ul className="list list-row scroller-x__list gap-4">
                {trickers.map((tricker, index) => (
                  <li className="ticker" key={index}>
                    <span className=" tricker">
                      <span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />
                      {isShow?<span className='name'>
                        
                        {tricker?.name} 
                      </span>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="scroller-x" data-direction="left" data-speed="slow">
            <ul className="list list-row scroller-x__list gap-4">
                {trickers.map((tricker, index) => (
                  <li className="ticker" key={index}>
                    <span className=" tricker">
                      <span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />
                      {isShow?<span className='name'>
                        
                        {tricker?.name} 
                      </span>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
