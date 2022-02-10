import pattern from 'patternomaly'


export const UserData = {

    labels: ['Red', 'Blue', 'Yellow',],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                pattern.draw('square', '#1f77b4'),
                pattern.draw('circle', '#ff7f0e'),
                pattern.draw('diamond', '#2ca02c'),
                pattern.draw('zigzag-vertical', '#17becf'),
                pattern.draw('box', 'rgb(255, 99, 132, 0.4)')
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 3,
        },
    ],
}