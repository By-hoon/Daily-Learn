function solution(skill, skill_trees) {
    var answer = 0;
    skill_trees.forEach(element => {
        var count = 0, check = 0;
        for (let i = 0; i < element.length; i++) {
            skill.search(element[i]) === count ? count++ : null;
            skill.search(element[i]) !== -1 ? check++ : null;
        }
        count === check ? answer++ : null;
    });
    return answer;
}