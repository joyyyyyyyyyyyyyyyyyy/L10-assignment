var totalCases = anime({
    targets: '#totalCases',
    innerHTML: [0, 257510], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 2000
});

var inHospital = anime({
    targets: '#inHospital',
    innerHTML: [0, 1365], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 2000
});

var totalDeaths = anime({
    targets: '#totalDeaths',
    innerHTML: [0, 678], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 2000
});

var header = anime({
    targets: '#header',
    translateY: {
        value: [-100, 0],
        duration: 1000,
        easing: 'easeInOutQuart'
    },
});

var section1Text = anime({
    targets: '#section1Text',
    translateX: {
        value: [-1000, 0],
    },
    duration: 10,
    easing: 'easeInOutQuart',
});

var totalCasesUndo = anime({
    targets: '#totalCases',
    innerHTML: [257510, 0], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 30
});

var inHospitalUndo = anime({
    targets: '#inHospital',
    innerHTML: [1365, 0], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 30
});

var totalDeathsUndo = anime({
    targets: '#totalDeaths',
    innerHTML: [678, 0], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 30
});

var header = anime({
    targets: '#header',
    translateY: {
        value: [0, 100],
        duration: 10,
        easing: 'easeInOutQuart'
    },
});

var section1TextUndo = anime({
    targets: '#section1Text',
    translateX: {
        value: [-1000, 0],
    },
    duration: 1000,
    easing: 'easeInOutQuart',
});

var section2Text = anime({
    targets: '#section2Text',
    translateX: {
        value: [1000, 0],
    },

    duration: 1000,
    easing: 'easeInOutQuart',
});

var vacCount = anime({
    targets: '#vacCount',
    innerHTML: [0, 9], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    duration: 1000
});

var section2TextUndo = anime({
    targets: '#section2Text',
    translateX: {
        value: [1000],
    },

    duration: 10,
    easing: 'easeInOutQuart',
});

var vacCountUndo = anime({
    targets: '#vacCount',
    innerHTML: [9, 0], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    duration: 10
});

var section3Text = anime({
    targets: '#section3Text',
    translateX: {
        value: [-1000, 0],
    },

    duration: 1000,
    easing: 'easeInOutQuart',
});

var section3Table = anime({
    targets: '.centres',
    translateX: {
        value: [1000, 0],
    },

    duration: 1000,
    delay: 500,
    easing: 'easeInOutQuart',
});

var section3TextUndo = anime({
    targets: '#section3Text',
    translateX: {
        value: [-1000],
    },

    duration: 10,
    easing: 'easeInOutQuart',
});

var section3TableUndo = anime({
    targets: '.centres',
    translateX: {
        value: [1000],
    },

    duration: 10,
    easing: 'easeInOutQuart',
});

$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#212122', '#212122', '#212122'],
        navigation: true,
        navigationPosition: 'right',

        anchors: ['section1', 'section2', 'section3'], //name the anchors for each section

        afterLoad: function (origin, destination, direction) {
            if (destination.index == 0) {
                totalCases.play();
                inHospital.play();
                totalDeaths.play();
                section1Text.play();
            } else if (destination.index == 1) {
                section2Text.play();
                vacCount.play(); // anime.js play method
                } else {
                section3Text.play();
                section3Table.play(); // anime.js play method
            }
        },

        onLeave: function (origin, destination, direction) {
            if (destination.index == 0) {
                totalCasesUndo.play();
                inHospitalUndo.play();
                totalDeathsUndo.play();
                section1TextUndo.play();
            } else if (destination.index == 1) {
                section2TextUndo.play();
                vacCountUndo.play(); // anime.js play method
                } else {
                section3TextUndo.play();
                section3TableUndo.play(); // anime.js play method
            }
        },


    });



    // Define chart labels
    const labels = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14'
    ];

    // Set labels, colours and data
    const data = {
        labels: labels,
        datasets: [{
            label: 'Cases per day',
            backgroundColor: '#afeeee',
            borderColor: '#afeeee',
            data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
        }]
    };


    // Configure chart
    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "white",
                        font: {
                            size: 18
                        }
                    }
                }
            },
            scales: { x: { title: { display: false, text: 'Day' }, ticks: { color: 'white' } }, y: { title: { display: false, text: 'Cases' }, ticks: { color: 'white' } } }
        }
    };

    // Render chart in <canvas>
    const myChart = new Chart(
        document.getElementById('CasesDistribution'),
        config
    );
});

$(document).ready(function () {
    $('centres').DataTable();
    $('.centres').DataTable({
        pageLength: 3,
        "lengthChange": false
    });

});

$(document).ready(function () {
    tippy('#Bedok', {
        content: '<b>Bedok Polyclinic</b><br>Vaccination: Pfizer<br>6343 1121',
        allowHTML: true, //allow HTML in tippy content
    });

    tippy('#Bukit_Batok', {
        content: '<b>Bukit Batok Polyclinic</b><br>Vaccination: Moderna<br>6343 1122',
        allowHTML: true, //allow HTML in tippy content
    });

    tippy('#Bukit_Merah', {
        content: '<b>Bukit Merah Polyclinic</b><br>Vaccination: Pfizer<br>6343 1123',
        allowHTML: true, //allow HTML in tippy content
    });

    tippy('#Choa_Chu_Kang', {
        content: '<b>Choa Chu Kang Polyclinic</b><br>Vaccination: Moderna<br>6343 1124',
        allowHTML: true, //allow HTML in tippy content
    });

    tippy('#Clementi', {
        content: '<b>Clementi Polyclinic</b><br>Vaccination: Pfizer<br>6343 1125',
        allowHTML: true, //allow HTML in tippy content
    });

    tippy('#Geylang', {
        content: '<b>Geylang Polyclinic</b><br>Vaccination: Pfizer<br>6343 1126',
        allowHTML: true, //allow HTML in tippy content
    });

    tippy('#Hougang', {
        content: '<b>Hougang Polyclinic</b><br>Vaccination: Pfizer<br>6765 1121',
        allowHTML: true, //allow HTML in tippy content
    });

    tippy('#Jurong', {
        content: '<b>Jurong Polyclinic</b><br>Vaccination: Pfizer<br>6765 1122',
        allowHTML: true, //allow HTML in tippy content
    });

    tippy('#Marine_Parade', {
        content: '<b>Marine Parade Polyclinic</b><br>Vaccination: Pfizer<br>6765 1123',
        allowHTML: true, //allow HTML in tippy content
    });

    tippy('#Outram', {
        content: '<b>Outram Polyclinic</b><br>Vaccination: Comirnaty<br>6765 1124',
        allowHTML: true, //allow HTML in tippy content
    });

    tippy('#Pasir_Ris', {
        content: '<b>Pasir Ris Polyclinic</b><br>Vaccination: Comirnaty<br>6765 1125',
        allowHTML: true, //allow HTML in tippy content
    });

    tippy('#Pioneer', {
        content: '<b>Pioneer Polyclinic</b><br>Vaccination: Moderna<br>66765 1126',
        allowHTML: true, //allow HTML in tippy content
    });

});