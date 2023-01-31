var arrLang = {
    'en': {
        'Settings': 'Settings',
        'Language': 'Language:',
        'Select language:': 'Select language:',
        'Elevator': 'Elevator',
        'Don t want to follow a specific route but you just want to find the way to a certain room? This is possible at the ': 'Don t want to follow a specific route but you just want to find the way to a certain room? This is possible at the ',
        'Destinations': 'Destinations',
        'Would you like a general view of the museum then you can find this at': 'Would you like a general view of the museum then you can find this at',
        'Map': 'Map',
        'an interactive display of the museum': 'an interactive display of the museum',
    },
    'nl': {
        'Settings': 'Instellingen',
        'Language': 'Taal:',
        'Select language:': 'Selecteer taal',
        'Elevator': 'Lift',
        'Don t want to follow a specific route but you just want to find the way to a certain room? This is possible at the ': 'Wil je geen specifieke route volgen maar wel snel de weg vinden naar een bepaalde plaats in het museum? Dat kan via',
        'Destinations': 'Bestemmingen',
        'Would you like a general view of the museum then you can find at': 'Wil je graag een algemeen overzicht van het museum dan kan je bij',
        'Map': 'Kaart',
        'an interactive display of the museum.': 'een 3D weergave vinden via onze interactieve kaart.',
    }
};

// Process translation
$(function () {
    $('.button1').click(function () {
        var lang = $(this).attr('id');

        $('#lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});