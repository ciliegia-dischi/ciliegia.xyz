export function showModal(selector) {
  const element = document.querySelector(selector);
  if (element)
    element.classList.add('active');
}

export function hideModal(selector) {
  const element = document.querySelector(selector);
  if (element)
    element.classList.remove('active');
}

export default function Modal(props) {
  const handleClick = (e) => {
    const dialogBox =
      document.getElementById(props.id)
      .querySelector('.dialog-box');
    const closeButton =
      document.getElementById(props.id)
      .querySelector('.dialog-box .close-button');
    if (!dialogBox.contains(e.target) ||
        closeButton.contains(e.target)) {
      hideModal('#' + props.id);
    }
  }

  return (
    <div id={props.id}
         className={"modal-window " + props.className}
         onClick={handleClick}>
      <div className="dialog-container">
        <div className="dialog-box">
          <button className="close-button">🗙</button>
          {props.children}
        </div>
      </div>
    </div>
  );
}
