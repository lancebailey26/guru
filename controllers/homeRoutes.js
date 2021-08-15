const router = require('express').Router();
const { User, Exercise, Routine} = require('../models');

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/');
    //   return;
    // }
    res.render('login');
  });
router.get('/', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(2, {
      attributes: { exclude: ['password'] },
    });
    

    const user = userData.get({ plain: true });
    const exerciseData = await Exercise.findAll({where: category_id = user.focus_group
    })
    const exercise = exerciseData.map((exercises) => exercises.get({plain : true}));
    // console.log(exerciseData)
    // console.log(userData)
    res.render('dashboard', {
      ...user,exercise
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/routines', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(2, {
      attributes: { exclude: ['password'] },
    });
    const routineData = await Routine.findAll({where: creator_id = 2
    })
    const routines = routineData.map((routine) => routine.get({ plain: true }));

    const user = userData.get({ plain: true });

    res.render('createroutines', {
      ...user, routines,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get('/routines/:id', async (req, res) => {
  try {
    const routineData = await Routine.findByPk(req.params.id, {
      include: [{
        model: User,
        attributes: ['name']
    }
]
})

    const routine = routineData.get({ plain: true });
    console.log(routine);

    res.render('routinepage', {routine});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(2, {
      attributes: { exclude: ['password'] },
    });
    

    const user = userData.get({ plain: true });
    const exerciseData = await Exercise.findAll({where: category_id = user.focus_group
    })
    const exercise = exerciseData.map((exercises) => exercises.get({plain : true}));
    // console.log(exerciseData)
    // console.log(userData)
    res.render('dashboard', {
      ...user,exercise
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
  module.exports = router;