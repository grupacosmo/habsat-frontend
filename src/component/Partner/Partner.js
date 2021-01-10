import { convertLegacyProps } from "antd/lib/button/button";

function Partner(props)
{
    return(
        <div className="partner-wrapper">
            <a 
                href={props.partnerSite}
                target="_blank"
                rel="noreferrer"
            >
                <img src={props.imgPath} alt={props.altText}></img>
            </a>
        </div>
    );
}

export default Partner;

