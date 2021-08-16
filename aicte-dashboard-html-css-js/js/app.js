// chart for Enrollment

const ENROLL_Chart = document.getElementById('enrollment-chart');

const enrollmentChart = new Chart(ENROLL_Chart, {
    type: 'bar',
    data: {
        labels: [
            '2015-2016',
            '2016-2017',
            '2017-2018',
            '2018-2019',
            '2019-2020',
            '2020-2021',

        ],
        datasets: [
            {
                label: 'Placement',
                data: [12,5, 30, 19, 12, 3],
                backgroundColor: 'rgb(30, 0, 161)',
                borderWidth: 1,
            },
            {
                label: 'Passed',
                data: [22, 19, 23, 40, 20, 33],
                backgroundColor: 'black',
                borderWidth: 1,
            },
            {
                label: 'Enrollment',
                data: [2, 19, 30, 5, 32, 3],
                backgroundColor: 'rgb(0, 131, 44)',
                borderWidth: 1,
            },
            {
                label: 'Intake',
                data: [32, 19, 23, 5, 2, 3],
                backgroundColor: 'rgb(248, 172, 9)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        indexAxis: 'y',
        y: {
            beginAtZero: true
          }

    }
});

//chart for Institute
const INST_Chart = document.getElementById('institute-chart');

const InstituteChart = new Chart(INST_Chart, {
    type: 'doughnut',
    data: {
        // title: 'Institute',
        labels: [
            '2015-2016',
            '2016-2017',
            '2017-2018',
            '2018-2019',
            '2019-2020',
            '2020-2021',

        ],
        datasets: [
            {
                label: 'Institute',
                data: [
                    20,
                    20,
                    20,
                    20,
                    20,
                    20
                ],
                backgroundColor: [
                    'rgb(135,206,235)',
                    'rgb(30,144,255)',
                    'rgb(100,149,237)',
                    'rgb(0,0,255)',
                    'rgb(25,25,112)',
                    'rgb(70,130,180)'
                ],
                hoverBackgroundColor: []
            }
        ]
    }
});

