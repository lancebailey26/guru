const router = require('express').Router();
const { User, Exercise, Routine} = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/');
    //   return;
    // }
    res.render('login');
  });
router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    

    const user = userData.get({ plain: true });
    const exerciseData = await Exercise.findAll({where: category_id = user.focus_group
    })
    const exercise = exerciseData.map((exercises) => exercises.get({plain : true}));
    // console.log(exerciseData)
    // console.log(userData)
    res.render('dashboard', {
      ...user,exercise, logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/routines', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    const routineData = await Routine.findAll()
    const routines = routineData.map((routine) => routine.get({ plain: true }));
console.log(req.session.user_id)
    const user = userData.get({ plain: true });

    res.render('createroutines', {
      ...user, routines, logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get('/routines/:id', withAuth, async (req, res) => {
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

    res.render('routinepage', {routine, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/dashboard', async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//     });
    

//     const user = userData.get({ plain: true });
//     const exerciseData = await Exercise.findAll({where: category_id = user.focus_group
//     })
//     const exercise = exerciseData.map((exercises) => exercises.get({plain : true}));
//     // console.log(exerciseData)
//     // console.log(userData)
//     res.render('dashboard', {
//       ...user,exercise
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
  module.exports = router;