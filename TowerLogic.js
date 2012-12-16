var brickInStack, TowerLogic;
import$(this, prelude);
angular.module('SomeApp', []).filter('numeric', function(){
  return function(input){
    if (input === '?') {
      return 3;
    }
    return input;
  };
});
brickInStack = function(currentBrick, nextBrick){
  false;
  if (nextBrick.color === currentBrick.color && nextBrick.n === currentBrick.n + 1) {
    return true;
  }
};
TowerLogic = function($scope){
  var keyBrick;
  keyBrick = function(towerIndex){
    var fromBricks;
    brick.depth = 1;
    fromBricks = this.$scope.towers[towerIndex].bricks;
    while (brick.depth < fromBricks.length && brickInStack(fromBricks[brick.depth - 1], fromBricks[brick.depth])) {
      brick.depth += 1;
    }
    return brick;
  };
  $scope.solution = [];
  $scope.towers = [
    {
      index: 0,
      bricks: [
        {
          n: 3,
          color: 'orange'
        }, {
          n: 6,
          color: 'orange'
        }, {
          n: 1,
          color: 'red'
        }, {
          n: 0,
          color: 'red'
        }, {
          n: 0,
          color: 'blue'
        }, {
          n: 4,
          color: 'cyan'
        }
      ]
    }, {
      index: 1,
      bricks: [
        {
          n: 3,
          color: 'red'
        }, {
          n: 0,
          color: 'green'
        }, {
          n: 2,
          color: 'red'
        }, {
          n: 3,
          color: 'cyan'
        }, {
          n: 5,
          color: 'cyan'
        }, {
          n: 6,
          color: 'cyan'
        }
      ]
    }, {
      index: 2,
      bricks: [
        {
          n: 4,
          color: 'green'
        }, {
          n: 1,
          color: 'cyan'
        }, {
          n: 3,
          color: 'violet'
        }, {
          n: 4,
          color: 'violet'
        }, {
          n: 5,
          color: 'violet'
        }
      ]
    }, {
      index: 3,
      bricks: [
        {
          n: 0,
          color: 'violet'
        }, {
          n: 1,
          color: 'violet'
        }, {
          n: 2,
          color: 'violet'
        }, {
          n: 1,
          color: 'orange'
        }, {
          n: 2,
          color: 'orange'
        }
      ]
    }, {
      index: 4,
      bricks: [
        {
          n: 4,
          color: 'orange'
        }, {
          n: 0,
          color: 'orange'
        }, {
          n: 4,
          color: 'red'
        }, {
          n: 5,
          color: 'red'
        }, {
          n: 0,
          color: 'cyan'
        }
      ]
    }, {
      index: 5,
      bricks: [
        {
          n: 3,
          color: 'green'
        }, {
          n: 5,
          color: 'orange'
        }, {
          n: 1,
          color: 'green'
        }, {
          n: 2,
          color: 'green'
        }, {
          n: 5,
          color: 'green'
        }
      ]
    }, {
      index: 6,
      bricks: [
        {
          n: 3,
          color: 'blue'
        }, {
          n: 4,
          color: 'blue'
        }, {
          n: 5,
          color: 'blue'
        }, {
          n: 6,
          color: 'blue'
        }, {
          n: 6,
          color: 'violet'
        }
      ]
    }, {
      index: 7,
      bricks: [
        {
          n: 2,
          color: 'cyan'
        }, {
          n: 6,
          color: 'green'
        }, {
          n: 2,
          color: 'blue'
        }, {
          n: 6,
          color: 'red'
        }, {
          n: 1,
          color: 'blue'
        }
      ]
    }
  ];
  $scope.checkSolver = function(){
    var affectedTowers;
    affectedTowers = solver_nextMove($scope.towers);
    return $scope.moveBricks(affectedTowers[0], affectedTowers[1]);
  };
  $scope.newPuzzle = function(){
    var ref$, ref1$;
    return $scope.towers = [
      ref$ = {
        index: 0,
        bricks: [
          ref1$ = {
            n: '?',
            color: 'grey'
          }, ref1$, ref1$, ref1$, ref1$, ref1$
        ]
      }, ref$
    ].concat([
      ref$ = {
        index: 0,
        bricks: [
          ref1$ = {
            n: '?',
            color: 'grey'
          }, ref1$, ref1$, ref1$, ref1$
        ]
      }, ref$, ref$, ref$, ref$, ref$
    ]);
  };
  $scope.moveBricks = function(iFrom, iTo){
    var brickStack;
    brickStack = $scope.towers[iFrom].bricks.splice(0, this.keyBrick(iForm).depth);
    $scope.towers[iTo].bricks = brickStack.concat($scope.towers[iTo].bricks);
    return $scope.solution.push({
      fromTower: iFrom({
        toTower: iTo
      })
    });
  };
  return $scope.towerMove = function(fromTower){
    var toTower;
    toTower = solver_towersBestMove($scope.towers, fromTower);
    if (!(toTower === -1)) {
      return $scope.moveBricks(fromTower, toTower);
    }
  };
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}