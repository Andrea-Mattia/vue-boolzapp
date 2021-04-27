/**
 * Milestone 1
 * Replica della grafica con la possibilità di avere messaggi scritti dall’utente
 * (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse. I messaggi
 * saranno statici per ora. Grafica e immagini allegate nello zip.
 * 
 * Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
 * visualizzare nome e immagine di ogni contatto. I dati dei contatti li trovate
 * allegati nello zip.
 * 
 * Milestone 2
 * Visualizzazione dinamica dei messaggi: tramite la direttiva
 * v-for, visualizzare tutti i messaggi relativi al contatto
 * attivo all’interno del pannello della conversazione
 * Click sul contatto mostra la conversazione del contatto
 * cliccato
 * 
 * Milestone 3
 * Aggiunta di un messaggio: l’utente scrive un testo nella
 * parte bassa e digitando “enter” il testo viene aggiunto al
 * thread sopra, come messaggio verde
 * Risposta dall’interlocutore: ad ogni inserimento di un
 * messaggio, l’utente riceverà un “ok” come risposta, che
 * apparirà dopo 1 secondo.
 * 
 * Milestone 4
 * Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
 * vengono visualizzati solo i contatti il cui nome contiene le
 * lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar”
 * rimangono solo Marco e Martina)
 */


/**
 * New Vue instance
 */

const app = new Vue({
    el: '#app',
    data: {
        // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Giangiacomo',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '12/03/2021 15:30:55',
                        message: 'Lo sai che le mucche fano moo, ma una fa moo moo?',
                        status: 'sent'
                    },
                    {
                        date: '12/03/2021 15:50:10',
                        message: 'Si, ma preferirei che non mi scrivessi cavolate',
                        status: 'received'
                    },
                    {
                        date: '12/03/2021 15:53:28',
                        message: 'E allora dove sarebbe il divertimento?',
                        status: 'sent'
                    },
                    {
                        date: '12/03/2021 15:55:20',
                        message: 'Non lo so, prova a chiedermi qualcos\'altro!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Eustachio',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 12:32:25',
                        message: 'Allora? tutto pronto per stasera?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 12:38:00',
                        message: 'Assolutamente! Ho anche comrato una macchina per i popcorn!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Foffo',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 16:30:55',
                        message: 'Ho un pochetto d\'ansia per domani. Secondo te come devo comportarmi?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:31:20',
                        message: 'Dovrei mettermi un bel completo?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:32:12',
                        message: 'Oppure vestirmi casual?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:33:00',
                        message: 'Le prendo dei fiori? O sono troppo scontati?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:35:24',
                        message: 'Zi, te stai ad accollà troppo. Stai tranquillo, ciò parlato io. Andrà tutto bene',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Carcarlo',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 16:43:55',
                        message: 'Ma è vero che domani sera Foffo esce con Elisa?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:45:00',
                        message: 'Si, me sta a riempì de domande. Non lo reggo più',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:45:55',
                        message: 'Vabbè dai, capiscilo. Sono anni che non esce con una donna!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Luisa',
                avatar: '_9',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 14:32:40',
                        message: 'Allora? Che sensazioni hai per domani sera?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 14:32:55',
                        message: 'Stai bella carica?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 14:35:00',
                        message: 'Lasciami perdere guarda, ho accettato solo perchè così almeno la smetteva di chiamarmi ogni volta',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 14:35:58',
                        message: 'Ora vado. Anche se è un rompiscatole almeno mi voglio dare una sistematina',
                        status: 'received'
                    },
                ],
            },
        ],
        response: [
                'Tutto bene!',
                'Tutto ok, grazie.',
                'Mah, così e così',
                'Va tutto a rotoli!!',
                'Non ciò na lira fratellì',
                'Se tira a campà'
        ],
        murphy: [
            'Niente è facile come sembra',
            'Tutto richiede più tempo di quanto si pensi',
            'Se esiste una possibilità che varie cose vadano male, quella che può arrecare il danno maggiore sarà la prima a farlo',
            'Se si prevedono quattro possibili modi in cui qualcosa può andare male, e si prevengono, immediatamente se ne rivelerà un quinto',
            'Lasciate a se stesse, le cose tendono ad andare di male in peggio',
            'Non ci si può mettere a far qualcosa senza che qualcos\'altro non vada fatto prima',
            'Ogni soluzione genera nuovi problemi',
            'I cretini sono sempre più ingegnosi delle precauzioni che si prendono per impedir loro di nuocere',
            'Per quanto nascosta sia una pecca, la natura riuscirà sempre a scovarla',
        ],
        indexChat: 0,
        newMessages: '',
        searchContact: '',
        randomIndex: 0,
    },
    computed: {
        filterContacts() {
            let tempContacts = this.contacts;
            if (this.searchContact !== '') {
                tempContacts = tempContacts.filter((contact) => {
                    return contact.name.toLowerCase().includes(this.searchContact.toLowerCase());
                });
            }
            return tempContacts;
        },
    },
    methods: {
        showChat(index) {
            this.indexChat = index;
        },
        sendMessage(indexChat) {
            if (this.newMessages !== '') {
                this.contacts[indexChat].messages.push({
                    message: this.newMessages,
                    status: 'sent',
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                });
    
    
                setTimeout(() => {

                    function getRandomNumber(min, max) {
                        return Math.floor( Math.random() * (max - min + 1) ) + min;
                    }

                    let lastResponse = this.response.length - 1;
                    this.randomIndex = getRandomNumber(0, lastResponse);

                    switch (this.newMessages) {
                        case 'come va?':
                        case 'tutto ok?':
                        case 'come andiamo?':
                        case 'come stai?':
                        case 'stai bene?':
                            this.contacts[indexChat].messages.push({
                                message: this.response[this.randomIndex],
                                status: 'received',
                                date: dayjs().format('DD/MM/YYYY HH:mm:ss')
                            });
                            break;
                        default:

                            let lastMurphy = this.murphy.length - 1;
                            this.randomIndex = getRandomNumber(0, lastMurphy);

                            this.contacts[indexChat].messages.push({
                                message: this.murphy[this.randomIndex],
                                status: 'received',
                                date: dayjs().format('DD/MM/YYYY HH:mm:ss')
                            });
                    }

                    this.newMessages = '';

                }, 1000);
            }
        },
    },
});