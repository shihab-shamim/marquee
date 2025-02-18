const MarqueeText = ({ attributes }) => {
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
                  <li key={index}>
                    <span className=" tricker d-inline-flex align-items-center gap-2 py-3 px-6 rounded-3 bg-light bg-opacity-5 text-light text-opacity-70">
                      <span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />
                      <span className="d-block fw-medium">
                        
                        {tricker?.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="scroller-x" data-direction="left" data-speed="slow">
            <ul className="list list-row scroller-x__list gap-4">
                {trickers.map((tricker, index) => (
                  <li key={index}>
                    <span className=" tricker d-inline-flex align-items-center gap-2 py-3 px-6 rounded-3 bg-light bg-opacity-5 text-light text-opacity-70">
                      <span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />
                      <span className="d-block fw-medium">
                        
                        {tricker?.name}
                      </span>
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
