export function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    //FUNCIONALIDADE DE ABRIR A MODAL
    modalWrapper.classList.add('active')
  }
  function close() {
    //FUNCIONALIDADE DE FECHAR A MODAL
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
