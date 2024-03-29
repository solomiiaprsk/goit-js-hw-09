const form = document.querySelector('.feedback-form');

const saveForm = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
    const data = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', data);
};

const loadForm = () => {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    const { email, message } = JSON.parse(saveData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
};

form.addEventListener('input', saveForm);

window.addEventListener('load', loadForm);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (form.elements.email.value.trim() === '' || form.elements.message.value.trim() === '' )   {
    alert('Поля форми порожні! Будь ласка введіть дані, а тоді нажміть кнопку Submit');
  }
  else {
    console.log({
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    });
      form.reset();
  }
  
});
