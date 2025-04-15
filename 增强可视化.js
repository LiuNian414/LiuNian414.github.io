// 在雷达图中增加职业基准线
radarOption.radar.indicator.push({
    name: '职业基准', 
    max: Math.max(...allPlayers.map(p => p.score)) * 1.2
});
