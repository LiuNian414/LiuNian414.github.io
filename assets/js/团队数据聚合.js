function calculateTeamStats() {
    return battleData.players.reduce((stats, player) => {
        if (!stats[player.team]) {
            stats[player.team] = { totalDamage: 0, totalHeal: 0, members: [] };
        }
        stats[player.team].members.push(player);
        return stats;
    }, {});
}
