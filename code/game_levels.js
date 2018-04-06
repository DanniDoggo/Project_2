var GAME_LEVELS = [
  ["  x                                                                           xxxx ",
   "  x           oo       oo               ooo                                   !!xx ",
   "  x @         e                                                    oo         !!xx ",
   "  xxxxxxx  xxxxxxx   xxxxxx   xxxxxxxx  xxxxxxx  xxxxxx   xxxxx     s      xxxxxxx ",
   "  x!!xxxx  x ooo x   xx        x     x        x   xxxxx   x!!    xxxxx      !!!!!x ",
   "  xxxx!!x  x     x   xx        xx    x        x   x!!xx   x                 !!!!!x ",
   "  x!!x!!x  x    xx   xxxxx           xxxx     x   x  xx  xx      !            !!!x ",
   "  xxxxxxx  xx        xxxxxx            xx     x      xx   x     !!        o  !!!!x ",
   "  xyyyyyx  x         xxxxxxx   xxxxx   xx      xxxxxxx!   x     !!        o  !!!xx ",
   "  xooooox  xxxxxxxxxxxxxxxxx!!!x   xe               xxxx  x!!  !!!    !!  o  !!!xx ",
   "  x    ox            xxxxxxxxxxx       x      xxxxxxxxx   x!!  !       !  o  !!!xx ",
   "  xe   ox               xxx            x      x           x!!!!     !!!!  o  !!!xx ",
   "  xxx  ox  xxxxxxx   xxxxx       xxx   xxxxx  x   xx      x!!!!      !!!!  o  !!xx ",
   "  x    ox  x!!!!!x!!!x          x!!x   x   xoox   xx      x!!!!      !!!!!  o  !xx ",
   "  x    ox!!x     xxxxxxxx       x!!x       xoox   xxxx    xxxxx!   !!!!!!!!  o  !x ",
   "  x   xxx!!x                x      xxxxx   xoox   x           x!!!!!!!!!!!!  o   ! ",
   "  x     xxxx e              x           x  xoox   xxxxx       xxxxxxxx!!!!!!  o  ! ",
   "  xxx      xxxxxxx   xxxxxxxxx         x   xoox   x      s xx         xx!!!  o  !x ",
   "  x!!xx                  xxxx     xxxxxxx  xxxx         xxx                    !xx ",
   "  x!x!!xx             x x x!!!!!!!!!!!!!!!!!!!!!!!!!!!!x        oo              !x ",
   "  x!x!!xxx           x x x xxxxxxxxx!!!!!!!xxxxxx!!!xxxx                        !x ",
   "  xxxxxxxxxx                   ooo                          xx!!xx!!xx           ! ",
   "  x!!x!!x!!                   e                            xxx!!!!!!xxx         !x ",
   "  x!!xx!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "],
  ["                                                                                                               x",
   "xxxx   @   xxxx                                                                                                x",
   "x             x                                       xxxxxxxxx     xxxxxxxxxx                                 x",
   "x             x                                     xx!!!!!!!!!     !!!!!!!!!!xx                               x",
   "x             x                                   xx!!!!!!!!!!!     !!!!!!!!!!!!xx                             x",
   "x             xxxxxxe                           xx!!!!!!!!!!!!!     !!!!!!!!!!!!!!xx                           x",
   "x  s               x                         xx!!!!!!!!!!!!!!!       !!!!!!!!!!!!!!!xx                         x",
   "x                                         xx !!!!!!!!!!!!!             !!!!!!!!!!!!!!xx                        x",
   "x        !!!!                            xx!!!!!!!!!!!!!                !!!!!!!!!!!!!!!!xx                     x",
   "x                                     xx!!!!!!!!!!!!!!!!                !!!!!!!!!!!!!!!!!xx                    x",
   "x                  x                xxx!!!!!!!!!!!!!e                         !!!!!!!!!!!!!xx                  x",
   "x                  xxx            xx!!!!!!!!!!!!!!!!!!!!!!                        !!!!!!!!!!!xx                x",
   "x  !!!                          xx!!!!!!!!!!!!!!!!!!!!!!                        !!!!!!!!!!!!!!!xx              x",
   "x                             xx!!!!!!!!!!!!!!!!!!!!!!                                          xx             x",
   "x                          xx!!!!!!!!!!!!!!!!!!!!!e                                              xx            x",
   "x                         xx!!!!!!!!!!!!!!!!!!!!!                             x         x          xx          x",
   "x        !!!!           xxxxxxxxxx!!!!!!!!!!!!!! x        x       xxx         x           xx         xxe       x",
   "x                                x !!!! x       x         x       x                  xx                xx      x",
   "x                    xxxxxxxx    x                      ! x       x                                      xx    x",
   "x                  xx!!!!!!!x oo x              x   x   ! x       x     xe                                x  s x",
   "xe               xx!!!!!!!!!xxxxxx       x     x        ! x ooooo x   x               x                   xxxxx!",
   "x              xx!!!!!!!!!!!!!!!!!!!!!!!!!    !!!!!!!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "x            xx!!!!!!!!!!!!!!!!!!!!!!        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "xxxxx xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!x x!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!x x!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!x x!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!x x!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!xox!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!xxx!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
   ["                                                                                                               x",
    "xxxx       xxxx                                                                                                x",
    "x             x                                       xxxxxxxxxxxxxxxxxxxxxxx            e                     x",
    "x             x                                     xx!!!!!!!!!     !!!!!!!!!!xx                               x",
    "x             xooo                                xx!!!!!!!!!!!     !!!!!!!!!!xxx                              x",
    "x             xxxxxxe                           xx!!!!!!!!!!!!!     !!!!!!!!!!!!!!xx     e                     x",
    "x  s               x                         xx!!!!!!!!!!!!!!!       !!!!!!!!!!!!!!!xx                         x",
    "x                                         xx !!!!!!!!!!!!!             !!!!!!!!!!!!!!xx                        x",
    "x        !!!!                s           xx!!!!!!!!!!!!!                !!!!!!!!!!!!!!!!xx       e             x",
    "x                                     xx!!!!!!!!!!!!!!!!                !!!!!!!!!!!!!!!!!xx                    x",
    "x                  x                xxx!!!!!!!!!!!!!e                         !!!!!!!!!!!!!xx                  x",
    "x                  xxx            xx!!!!!!!!!!!!!!!!!!!!!!                        !!!!!!!!!!!xx                x",
    "x  !!!                          xx!!!!!!!!!!!!!!!!!!!!!!                        !!!!!!!!!!!!!!!xx      e       x",
    "x                             xx!!!!!!!!!!!!!!!!!!!!!!                                          xx             x",
    "x                          xx!!!!!!!!!!!!!!!!!!!!!e                                              xxe           x",
    "x                         xx!!!!!!!!!!!!!!!!!!!!!                             x         x          xx      s   x",
    "x        !!!!           xxxxxxxxxx!!!!!!!!!!!!!! x                            x           xx         xx        x",
    "x                                x !!!! x       x                                    xx                xx      x",
    "x                    xxxxxxxx    x                      !                                                xx    x",
    "x                  xx!!!!!!!x oo x              x   x   !               x                                 x  @ x",
    "xe               xx!!!!!!!!!xxxxxx       x     x        !              x               x                   xxxxx!",
    "x              xx!!!!!!!!!!!!!!!!!!!!!!!!!    !!!!!!!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "x            xx!!!!!!!!!!!!!!!!!!!!!!        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "xxxxx xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "!!!!x x!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "!!!!x x!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "!!!!x x!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "!!!!x x!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "!!!!xox!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "!!!!xxx!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        x  x  x   x   x    x                                                  ",
   "                                        x  x  x   x   x x  x                                                  ",
   "                                        x  x  x   x   x  x x                                                  ",
   "                                        xxxxxxx   x   x   xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "             xxx         xxx         xxx                                                                      ",
   "                                                                                                              ",
   "       @                                                                                                      ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx xxxxxxxxxxxxxxxxxxxxxxx                                            ",
   "  x         x   x       x   x       x   x                                     x     x                         ",
   "  x         xxxxx       xxxxx       xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx                                                           ",
   "        x                                     x   x                                                           ",
   "        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
