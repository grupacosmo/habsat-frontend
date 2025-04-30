import './Partner.css'

interface Props {
    imgPath: string,
    altText: string,
    partnerSite: string,
}

function Partner(props:Props)
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

