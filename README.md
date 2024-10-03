# SSH Terminal Web Application

## Descrizione

Questo progetto è una semplice applicazione web che permette agli utenti di connettersi a un server remoto via SSH e di interagire con un terminale direttamente dal browser. L'applicazione è costruita utilizzando Node.js, Express, Socket.IO, e la libreria `node-pty` per gestire il terminale virtuale.

## Funzionalità

- **Connessione SSH**: L'utente può inserire i dettagli di connessione (host, porta, username, password) per connettersi a un server remoto via SSH.
- **Interazione con il Terminale**: Una volta stabilita la connessione, l'utente può interagire con il terminale remoto direttamente dal browser.
- **Gestione della Connessione**: L'applicazione gestisce automaticamente la chiusura della connessione SSH quando l'utente si disconnette o quando si verifica un errore.

## Struttura del Progetto

- **`public/`**: Contiene i file statici (HTML, CSS, JS) che vengono serviti al client.
- **`index.js`**: Il file principale dell'applicazione che configura il server Express, Socket.IO, e gestisce le connessioni SSH.

## Dipendenze

- **Express**: Framework web per Node.js.
- **Socket.IO**: Libreria per la comunicazione real-time tra il server e il client.
- **node-pty**: Libreria per la gestione di terminali virtuali.
- **ssh2**: Libreria per la gestione delle connessioni SSH.

## Come Usare

1. **Clona il Repository**:
   ```bash
   git clone https://github.com/gidixi/RemoteTerminalJs.git
   cd nome-repo
   ```

2. **Installa le Dipendenze**:
   ```bash
   npm install
   ```

3. **Avvia il Server**:
   ```bash
   node index.js
   ```

4. **Accedi all'Applicazione**:
   Apri il browser e vai a `http://localhost:3000`. Dovresti vedere una pagina web dove puoi inserire i dettagli di connessione SSH e interagire con il terminale remoto.

## Eventi Socket.IO

- **`startTerminal`**: Invia i dettagli di connessione SSH al server per avviare una sessione SSH.
- **`output`**: Riceve l'output dal terminale remoto e lo visualizza nel browser.
- **`input`**: Invia i comandi dal browser al terminale remoto.
- **`disconnect`**: Gestisce la disconnessione dell'utente e termina la sessione SSH.
