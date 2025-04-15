function validateData(player) {
    if(player.class === '素问' && !player.featherCount) {
        alert("素问职业必须填写化羽次数");
        return false;
    }
    // 其他校验规则...
    return true;
}
