import "./qualifications.css";

const Qualifications = () => {
  return (
    <div className="container-cert">
      <div className="cert-text">
        <span className="quali-text">Meus Certificados</span>
      </div>
      <div className="slider">
        <div className="slides">
          <div className="slide1" data-testid='slide1'></div>
          <div className="slide2" data-testid='slide2'></div>
          <div className="slide3" data-testid='slide3'></div>
          <div className="slide4" data-testid='slide4'></div>
          <div className="slide5" data-testid='slide5'></div>
          <div className="slide6" data-testid='slide6'></div>
          <div className="slide7" data-testid='slide7'></div>
          <div className="slide8" data-testid='slide8'></div>
          <div className="slide9" data-testid='slide9'></div>
          <div className="slide10" data-testid='slide10'></div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
