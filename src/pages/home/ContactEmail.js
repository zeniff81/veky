import React from "react";

function ContactEmail() {
  return (
    <div className='contact-email'>
      <div className='title'>envíenos un mensaje</div>
      <form action='*' className='form-contact'>
        <input type='text' name='name' placeholder='nombre' />
        <input type='text' name='phone' placeholder='teléfono' />
        <input type='text' name='email' placeholder='email' />
        <textarea
          name='message'
          id='message'
          cols='30'
          rows='10'
          placeholder='mensaje'
        ></textarea>
        <div className='form-footer'>
          <a href='/email'>enviar</a>
        </div>
      </form>
    </div>
  );
}

export default ContactEmail;
