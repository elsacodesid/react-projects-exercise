import "./styles.css";

export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">&times;</span>
          <h2>{header ? header : "Header"} </h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque adipisci placeat incidunt perspiciatis quis veniam, dolores aut omnis. Ad, eos unde? In enim quis nulla ullam aut possimus distinctio harum commodi quibusdam animi, tenetur reiciendis facere, sunt ea. Commodi illo excepturi dolores facere! Ea dolore recusandae maiores tempore quibusdam tempora?
              </p>
            </div>
          )}
        </div>

        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}
