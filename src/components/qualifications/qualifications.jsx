import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <div className="cert-text">
      <span className="quali-text">Meus Cetificados</span>
      </div>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html1"></div>
          <h1>html 1</h1>
        </div>
        <div className="qualification">
          <div className="content html2"></div>
          <h1>html 2</h1>
        </div>
        <div className="qualification">
          <div className="content html3"></div>
          <h1>html 3</h1>
        </div>
        <div className="qualification">
          <div className="content javascript1"></div>
          <h1>javascript 1</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
