
var app = new Vue ({
    el: '#root',
    data: {
        userMessage: '',
        userSearch: '',
        activeElement: 2,
        currentMessage: null,
        onlyTime: dayjs().format("HH:mm"),
        dateTime: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        messageMenu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        messageMenu: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        messageMenu: false
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
                        text: 'Ciao come stai?',
                        status: 'sent',
                        messageMenu: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        messageMenu: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        messageMenu: false
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
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        messageMenu: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        messageMenu: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        messageMenu: false
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
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        messageMenu: false
                    },
                ],
            },
        ]
        
    },

    methods : {
        currentUserOnClick(elementIndex) {
            this.activeElement = elementIndex;
            this.currentMessage = null;
        },

        sendMessage(elementIndex) {
            if(this.userMessage === '') {
                this.userMessage = null;
            }
            const newMessage = {date: dayjs().format("DD/MM/YYYY HH:mm:ss"), text: this.userMessage.trim(), status: 'sent'}
            this.contacts[elementIndex].messages.push(newMessage)
            
            setTimeout(() => {
                let newMessage = {date: dayjs().format("DD/MM/YYYY HH:mm:ss"), text: 'ok', status: 'received'}
                this.contacts[elementIndex].messages.push(newMessage)
            }, 1000)

            this.userMessage = ''
        },

        filterElements() {
            const userInputLower = this.userSearch.toLowerCase();

            this.contacts.forEach((element) => {
                const elementTextLower = element.name.toLowerCase();

                if(elementTextLower.includes(userInputLower)) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        },

        toggleMenu(messageIndex) {
            if(this.currentMessage !== messageIndex) {
                this.currentMessage = messageIndex;
                console.log(this.currentMessage, messageIndex)
            } else {
                this.currentMessage = null;
            }
        }, 

        deleteMessage (currentIndex, mexIndex) {
            this.contacts[this.activeElement].messages.splice(currentIndex, 1)
            this.currentMessage = null;
        },
    
    }
})