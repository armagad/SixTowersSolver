var bestMove, isDoneOrEmpty, findSolution, keyBrick, brickInStack, TowerLogic;
angular.module('SomeApp', []).filter('numeric', function(){
  return function(input){
    if (input === '?') {
      return 3;
    }
    return input;
  };
});
import$(this, prelude);
bestMove = function(puzzle){};
isDoneOrEmpty = function(towerBricks){
  if (towerBricks.length === 0) {
    return true;
  }
  if (map(function(it){
    return it.n;
  }, towerBricks === [0, 1, 2, 3, 4, 5, 6]) && function(it){
    return it.length;
  }(
  unique(
  map(function(it){
    return it.color;
  }, towerBricks))) === 1) {
    return true;
  }
  return false;
};
findSolution = function(puzzle, steps){
  if (window.globalsBad.solution !== [] && steps.length > window.globalsBad.solution.length) {
    return;
  }
  if (window.globalsBad.penaltyMax < sum(map(function(it){
    return it.penalty;
  }, steps))) {
    return;
  }
  if (all(isDoneOrEmpty)(
  map(function(it){
    return it.bricks;
  }, puzzle))) {
    window.globalsBad.solution = steps;
  }
  return (function($_){
    if ($_) {
      return findSolution($_.puzzle, steps.concat($_.step));
    }
  }.call(this, bestMove(puzzle)));
};
keyBrick = function(towerIndex){
  var brick, fromBricks;
  brick = {
    depth: 1
  };
  fromBricks = this.towers[towerIndex].bricks;
  while (brick.depth < fromBricks.length && brickInStack(fromBricks[brick.depth - 1], fromBricks[brick.depth])) {
    brick.depth += 1;
  }
  return brick;
};
brickInStack = function(currentBrick, nextBrick){
  false;
  if (nextBrick.color === currentBrick.color && nextBrick.n === currentBrick.n + 1) {
    return true;
  }
};
TowerLogic = function($scope){
  $scope.solving = 0;
  $scope.maxPenalty = 25;
  $scope.penaltyPoints = 0;
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
  $scope.solve = function(){
    window.globalsBad = $scope;
    $scope.solving = 1;
    $scope.solution = [];
    $scope.solved = function(it){
      return it.length;
    }(
    findSolution(this.towers, []));
    return $scope.solving = 0;
  };
  $scope.aiMove = function(){
    var nextMove;
    nextMove = this.bestMove();
    return $scope.moveBricks(nextMove.iFrom, nextMove.iTo);
  };
  $scope.bestMove = function(){
    return this.fake.shift();
  };
  $scope.fake = [
    {
      penalty: 0,
      iFrom: 0,
      iTo: 4
    }, {
      penalty: 0,
      iFrom: 5,
      iTo: 2
    }, {
      penalty: 0,
      iFrom: 4,
      iTo: 5
    }, {
      penalty: 0,
      iFrom: 5,
      iTo: 0
    }, {
      penalty: 0,
      iFrom: 5,
      iTo: 2
    }, {
      penalty: 0,
      iFrom: 2,
      iTo: 5
    }, {
      penalty: 0,
      iFrom: 2,
      iTo: 7
    }, {
      penalty: 0,
      iFrom: 3,
      iTo: 2
    }, {
      penalty: 0,
      iFrom: 3,
      iTo: 0
    }, {
      penalty: 0,
      iFrom: 4,
      iTo: 0
    }, {
      penalty: 0,
      iFrom: 1,
      iTo: 4
    }, {
      penalty: 0,
      iFrom: 1,
      iTo: 5
    }, {
      penalty: 0,
      iFrom: 1,
      iTo: 4
    }, {
      penalty: 0,
      iFrom: 7,
      iTo: 1
    }, {
      penalty: 0,
      iFrom: 5,
      iTo: 7
    }
  ];
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
  return $scope.moveBricks = function(iFrom, iTo){
    $scope.towers[iTo].bricks = (function($_){
      return $_.splice(0, keyBrick($_).depth);
    }.call(this, $scope.towers[iFrom].bricks)).concat($scope.towers[iTo].bricks);
    $scope.solution.push({
      fromTower: iFrom,
      toTower: iTo,
      penalty: 0
    });
    return $scope.penaltyPoints = sum(map(function(it){
      return it.penalty;
    }($scope.solution)));
  };
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}