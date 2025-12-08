const urldois = 'https://sv443.net/jokeapi/v2/'                                
const urltres = 'https://boardgamegeek.com/wiki/page/BGG_XML_API2'
const urlquatro = 'https://wizard-world-api.herokuapp.com/swagger/index.html'

async function ConsultaUm() 
{
    const urlum = 'https://www.scorebat.com/video-api/';
    try{
        let resposta = await fetch(urlum);
        let js = await resposta.json();
        MostraDadosUm(js)
    } catch(err) {
        const painel = document.querySelector('#mostra');
        let texto = `<h1>Problema no acesso aos dados</h1>
                        Tipo do erro:${err.name}<br>
                        Mensagem completa:${err}`;
            painel.innerHTML = texto;
    }
}