const skills = [
    {skill: 'HTML', master: true},
    {skill: 'CSS', master: true},
    {skill: 'JavaScript', master: true},
    {skill: 'Node.js', master: false},
    {skill: 'Python', master: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills[id];
};

function create(skill) {
    skills.push(skill);
};

function deleteOne(id) {
    skills.splice(id, 1);
};

function update(skill, id) {
    skills.splice(id, 1, skill);
};