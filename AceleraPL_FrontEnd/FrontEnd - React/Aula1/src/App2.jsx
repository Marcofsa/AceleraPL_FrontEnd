import { useState2 } from 'react'
import reactLogo from './react.svg'
import viteLogo from '/vite.svg'
import './App2.css'
function App () {
    return (
        <div>
            <header>
                <div><img src="imagens/avatar.jpeg" alt="Avatar" /></div>
            </header>

            <section>
                <div>
                    <h2>Sobre mim</h2>
                    <p>Me chamo Flavio Siqueira, sou Empresário, Professor, Programador. Em algumas noites também sou Atleta Olímpico, Jogador profissional e tudo mais que couber no sonho...</p>
                </div>
            </section>

            <section>
                <div>
                    <h2>Ultimos Filmes assistidos</h2>
                    <p>Gosto bastante de filmes atuais, esses são os últimos assistidos no cinema.</p>
                    <ul className="film-list">
                        <li><img src="imagens/titanic.jpeg" alt="Titanic" title="Titanic" /></li>
                        <li><img src="imagens/benhur.jpeg" alt="Ben-Hur" title="Ben-Hur" /></li>
                        <li><img src="imagens/chefao.jpeg" alt="O poderoso Chefão" title="O poderoso Chefão" /></li>
                        <li><img src="imagens/forest.jpeg" alt="Forest Gump" title="Forest Gump" /></li>
                        <li><img src="imagens/magicoz.jpeg" alt="Mágico de Oz" title="Mágico de Oz" /></li>
                        <li><img src="imagens/topgun.jpeg" alt="Top Gun" title="Top Gun" /></li>
                    </ul>
                </div>
            </section>

            <section>
                <div>
                    <h2>Meus Contatos</h2>
                    <p>Entre em contato comigo nas redes abaixo</p>
                    <ul className="film-list">
                        <li><a href="https://www.facebook.com/aflavios" target="_blank" rel="noopener noreferrer"><img src="imagens/face.png" alt="Logo Facebook" title="Logo Facebook" /></a></li>
                        <li><a href="https://www.instagram.com/a.flavio.siqueira/" target="_blank" rel="noopener noreferrer"><img src="imagens/Instagram-Icon.png" alt="Logo Instagram" title="Logo Instagram" /></a></li>
                        <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><img src="imagens/tiktok.png" alt="Logo Tiktok" title="Logo Tiktok" /></a></li>
                        <li><a href="https://www.linkedin.com/flaviosiqueira" target="_blank" rel="noopener noreferrer"><img src="imagens/linkedin.png" alt="Logo Linkedin" title="Logo Linkedin" /></a></li>
                        <li><a href="https://www.github.com/flatrix" target="_blank" rel="noopener noreferrer"><img src="imagens/git.png" alt="Logo Github" title="Logo GitHub" /></a></li>
                        <li><a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer"><img src="imagens/Telegram_logo.svg.webp" alt="Logo Telegram" title="Logo Telegram" /></a></li>
                        <li><a href="https://www.twitter.com/flaviosiqueira" target="_blank" rel="noopener noreferrer"><img src="imagens/x.jpg" alt="Logo Twitter" title="Logo Twitter" /></a></li>
                        <li><a href="https://wa.me/5535999703731" target="_blank" rel="noopener noreferrer"><img src="imagens/zap.png" alt="Logo Whatsapp" title="Logo Whatsapp" /></a></li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default App;
