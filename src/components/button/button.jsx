import "./button.css";

function Buttons() {
  const onDownload2 = () => {
    fetch("curriculo.pdf").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "curriculo.pdf";
        a.click();
      });
    });
  };

  return (
    <div className="container button-container">
      <a onClick={onDownload2} download className="btn pri">
        Curriculo
      </a>
      <a href="#contact" className="btn sec">
        Contato
      </a>
    </div>
  );
}

export default Buttons;
