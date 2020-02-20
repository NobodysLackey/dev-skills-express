const skills = [
    {skill: 'HTML', master: true, diff: 'Beginner'},
    {skill: 'CSS', master: true, diff: 'Beginner'},
    {skill: 'JavaScript', master: true, diff: 'Intermediate'},
    {skill: 'NodeJS', master: false, diff: 'Intermediate'},
    {skill: 'Python', master: false, diff: 'Expert'}
];

module.exports = {
    getAll,
    getOne    
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills[id];
};