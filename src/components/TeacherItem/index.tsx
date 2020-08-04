import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://instagram.fsjk2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/92188271_239169663812638_6222175957017427968_n.jpg?_nc_ht=instagram.fsjk2-1.fna.fbcdn.net&_nc_ohc=AVgGFfuerjoAX-Jsq91&oh=dc58df81b1857da7349ab7a78d625383&oe=5F52B04D" alt="Pedro" />
                <div>
                    <strong>Pedro Henrique</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
              Venha conhecer novas tecnologias e se aprofundar no desenvolvimento web.
                <br /><br />
              Apaixonado por desenvolvimento web, venho aqui te chamar para participar de uma aula, onde irei falar sobre conhecimentos em html, css, JavaScript e react. No final da aula iremos costuir um projeto juntos, totalmente funcional para o mundo real.
            </p>

            <footer>
                <p>
                  Preço/hora
                  <strong>R$120,00</strong>
                </p>
             <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
                 Entrar em contato
             </button>
          </footer>
        </article>
    );
}

export default TeacherItem;
