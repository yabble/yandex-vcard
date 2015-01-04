({
    block: 'b-page',
    title: 'Евгений Соломатин — yabble@',
    favicon: '//yandex.st/morda-logo/i/favicon.ico',
    head: [
        { elem: 'css', url: 'yabble.css' },
        { elem: 'css', url: 'yabble.ie.css', ie: 'lte IE 7' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'yabble.js' }
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
    },
    {
        cls: 'metrika',
        bem: false,
        content: '<!-- Yandex.Metrika counter --><script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter22708219 = new Ya.Metrika({id:22708219, accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/22708219" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->'
    }
    ]
})
