import { convertLegacyProps } from "antd/lib/button/button";

function Partner(props)
{
    return(
        <div className="partner-wrapper">
            <img src={props.imgPath} alt={props.altText}></img>
        </div>
    );
}

export default Partner;

