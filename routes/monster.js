const express = require('express');
const router = express.Router();

const monsters = require('../model/db');

router.get('/:monsterSlug?', (request, response) => {
    if (!!request.params.monsterSlug) {

        const theMonster = monsters.find(monster => monster.slug === request.params.monsterSlug);

        response.render('template', {
            locals: {
                title: theMonster.name,
                species: theMonster.species
            },
            partials: {
                partial: 'partial-monster-detail'
            }
        });
    } else {
        response.render('template', {
            locals: {
                title: "MONSTER!!",
                data: monsters
            },
            partials: {
                partial: 'partial-monster-list'
            }
        });
    }
});

module.exports = router;