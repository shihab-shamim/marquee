import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import MarqueeText from "../marquee/MarqueeText";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  // const { purposeType } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksTestPurpose">
        <MarqueeText attributes={attributes} setAttributes={setAttributes} />
        </div>
      </div>
    </>
  );
};
export default Edit;
