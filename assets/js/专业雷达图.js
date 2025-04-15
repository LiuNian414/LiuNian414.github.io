function renderRadarChart() {
    const chart = echarts.init(document.getElementById('radarChart'));
    chart.setOption({
        radar: {
            indicator: [
                { name: '综合评分', max: 100 },
                { name: '生存能力', max: 50 },
                { name: '团队贡献', max: 80 },
                { name: '资源效率', max: 30 }
            ]
        },
        series: [{
            data: battleData.players.map(p => ({
                value: [p.score, p.survivalIndex, p.teamContribution, p.resourceEfficiency],
                name: p.name
            }))
        }]
    });
}
