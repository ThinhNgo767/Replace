import "./style.css";

const Modal = ({ text, modal, handleCloseModal }) => {
  const containsHTML = (str) => /<[a-z][\s\S]*>/i.test(str);
  const texts = text.map((t, i) => {
    return (
      <p key={i}>
        {containsHTML(t) ? (
          <span dangerouslySetInnerHTML={{ __html: t }} className="text-md" />
        ) : (
          <span className="text-md">{t}</span>
        )}
      </p>
    );
  });

  return (
    <div
      className="container-modal"
      style={modal ? { display: "flex" } : { display: "none" }}
    >
      <div className="box-modal">
        {texts}

        <button
          type="button"
          className="close-modal"
          title="close modal"
          onClick={handleCloseModal}
        >
          OKIE
        </button>
      </div>
    </div>
  );
};

export default Modal;
