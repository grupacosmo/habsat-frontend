import './HeheSection.css';
import HeheTitle from "../../component/HeheTitle/HeheTitle";
import background from "../../assets/images/baloon.jpeg"

function HeheSection() {
    return (
        <div
            className="heheSection"
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "800px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
          <HeheTitle />
        </div>
    );
}

export default HeheSection;
