import { convertLegacyProps } from "antd/lib/button/button";
import './Partner.css'

function Partner(props)
{
    return(
        <div className="PartnerElement">
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

