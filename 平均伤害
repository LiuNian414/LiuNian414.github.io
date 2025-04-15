// 计算DPS职业平均伤害
const dpsPlayers = allPlayers.filter(p => !['素问','铁衣'].includes(p.class));
teamData.avgDpsDamage = dpsPlayers.reduce((a,b) => 
  a + b.playerDamage + b.structureDamage, 0) / dpsPlayers.length;
