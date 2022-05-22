fetch('https://coasters-api.herokuapp.com/')
    .then(response => response.json())
    .then(data => printCharts(data))


function printCharts(coasters) {


    document.body.classList.add('running')


    compareRadialChart(coasters, 'chart2')
    modelDoughnutChart(coasters, 'chart4')
    GForceBarsChart(coasters, 'chart5')

}




function compareRadialChart(coasters, id) {

    const data = {
        labels: ['EEUU', 'UK', 'España', 'Japón', 'China'],
        datasets: [  
            {
                data: [
                    coasters.filter(eachCoaster => eachCoaster.country === 'United States').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'United Kingdom').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'Spain').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'Japan').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'China').length
                ],
                borderWidth: 1,
                borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)','rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
                backgroundColor: ['rgba(116, 72, 194, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)', 'rgba(156, 153, 204, .2)', 'rgba(225, 78, 202, .2)', 'rgba(116, 72, 194, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)', 'rgba(156, 153, 204, .2)', 'rgba(225, 78, 202, .2)']
            }
        ]
    }

    const options = {
        scale: {
            gridLines: {
                color: '#444'
            },
            ticks: {
                display: false
            }
        },
        legend: {
            position: 'right',
            labels: {
                fontColor: '#fff'
            }
        }
    }

    new Chart(id, { type: 'polarArea', data, options })
}








function modelDoughnutChart(coasters, id) {

    const data = {
        labels: ['Propulsada', 'Hiper montaña', 'Giga montaña', 'Inversión', 'Sentado'],
        datasets: [
            {
                data: [
                    coasters.filter(eachCoaster => eachCoaster.model === 'Accelerator Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Giga Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Multi Inversion Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Sitting Coaster').length
                ],
                borderColor:['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
                backgroundColor: ['rgba(116, 72, 194, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)', 'rgba(156, 153, 204, .2)', 'rgba(225, 78, 202, .2)'],
                borderWidth: 1
            }
        ]
    }

    const options = {
        legend: {
            position: 'right',
            labels: {
                fontColor: '#fff'
            }
        }
    }

    new Chart(id, { type: 'doughnut', data, options })
}


function GForceBarsChart(coasters, id) {

    const selectedCoasters = coasters.filter(eachCoaster => eachCoaster.gForce)

    const data = {
        labels: selectedCoasters.map(eachCoaster => eachCoaster.name),
        datasets: [{
            data: selectedCoasters.map(eachCoaster => eachCoaster.gForce),
            backgroundColor: ['rgba(116, 72, 194, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)', 'rgba(156, 153, 204, .2)', 'rgba(225, 78, 202, .2)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
        }]
    }

    const options = {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: true
                }
            }]
        }
    }

    new Chart(id, { type: 'bar', data, options })

}  

