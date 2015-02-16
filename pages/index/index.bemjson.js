({
    block: 'b-page',
    title: 'Евгений Соломатин — yabble@',
    favicon: '//yandex.st/morda-logo/i/favicon.ico',
    head: [
        { elem: 'css', url: 'index.css' },
        { elem: 'css', url: 'index.ie.css', ie: 'lte IE 7' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'index.js' }
    ],
    i18n: { langs: ['ru', 'en'], lang: 'ru' },
    content: {
        block: 'b-card',
        mods: { lang: 'ru' },
        content: [
            {
                block: 'b-card-layout',
                lang: 'ru',
                info: {
                    name: 'Евгений Соломатин',
                    position: 'Специалист службы IT инфраструктуры<br>датацентров',
                    company: {
                        country: 'Россия',
                        locality: 'Москва',
                        zip: '119021',
                        address: 'ул. Льва Толстого, д. 16',
                        phone: '+7 (495) 739-70-00',
                        'phone-add': '7224',
                    //  fax: '+7 (495) 739-70-70',
                        site: 'www.yandex.ru'
                    },
                    person: {
                        email: 'yabble@yandex-team.ru',
                    //  cellular: '+7 (926) 080-08-80',
                    //  skype: 'yabble@',
                    //  github: 'yabble'
                    }
                }
            },
            {
                block: 'b-card-layout',
                lang: 'en',
                info: {
                    name: 'Eugene Solomatin',
                    position: 'Data Center Infrastructure<br>IT Specialist',
                    company: {
                        country: 'Russia',
                        locality: 'Moscow',
                        zip: '119021',
                        address: '16, Leo Tolstoy St.',
                        phone: '+7 (495) 739-70-00',
                        'phone-add': '7224',
                        site: 'www.yandex.com'
                    },
                    person: {
                        email: 'yabble@yandex-team.ru',
                    //  cellular: '+7 (926) 080-08-80',
                    //  skype: 'yabble@',
                   //   github: 'yabble'
                    }
                }
            }
        ]
    }
})
