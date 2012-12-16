TowerLogic = ($scope) ->
  $scope.solution = []
  $scope.towers   = [
    {index: 0, bricks: [{n:3 color:\orange},{n:6 color:\orange},{n:1 color:\red   },{n:0 color:\red   },{n:0 color:\blue  },{n:4 color:\cyan  }]},
    {index: 1, bricks: [{n:3 color:\red   },{n:0 color:\green },{n:2 color:\red   },{n:3 color:\cyan  },{n:5 color:\cyan  },{n:6 color:\cyan  }]},
    {index: 1, bricks:                     [{n:4 color:\green },{n:1 color:\cyan  },{n:3 color:\violet},{n:4 color:\violet},{n:5 color:\violet}]},
    {index: 1, bricks:                     [{n:0 color:\violet},{n:1 color:\violet},{n:2 color:\violet},{n:1 color:\orange},{n:2 color:\orange}]},
    {index: 1, bricks:                     [{n:4 color:\orange},{n:0 color:\orange},{n:4 color:\red   },{n:5 color:\red   },{n:0 color:\cyan  }]},
    {index: 1, bricks:                     [{n:3 color:\green },{n:5 color:\orange},{n:1 color:\green },{n:2 color:\green },{n:5 color:\green }]},
    {index: 1, bricks:                     [{n:3 color:\blue  },{n:4 color:\blue  },{n:5 color:\blue  },{n:6 color:\blue  },{n:6 color:\violet}]},
    {index: 1, bricks:                     [{n:2 color:\cyan  },{n:6 color:\green },{n:2 color:\blue  },{n:6 color:\red   },{n:1 color:\blue  }]}]

  $scope.checkSolver = ->
    affectedTowers = solver_nextMove $scope.towers
    $scope.moveBricks affectedTowers.0, affectedTowers.1

  $scope.moveBricks = (iFrom, iTo) ->
    howMany = 1
    fromBricks = $scope.towers[iFrom].bricks
    while howMany < fromBricks.length and brickInStack fromBricks[howMany - 1], fromBricks[howMany]
      howMany += 1
    brickStack = $scope.towers[iFrom].bricks.splice 0, howMany
    $scope.towers[iTo].bricks = brickStack.concat $scope.towers[iTo].bricks
    $scope.solution.push {
      text: 'Tower ' + iFrom + 1 + ' to Tower ' + iTo + 1
      fromTower: iFrom
      toTower: iTo
    }

  $scope.towerMove = (fromTower) ->
    toTower = solver_towersBestMove $scope.towers, fromTower
    $scope.moveBricks fromTower, toTower if not (toTower is -1)

# class Solver
#     puzzlesBextMove: ->
#         
#     function solver_nextMove(){
#         return window.temp.shift();
#     };
# 
#     towersBestMove: (fromTower) ->
#         var howMany = 1;
#         var fromBricks = puzzle[fromTower].bricks;
#         while(howMany < fromBricks.length &&  brickInStack(fromBricks[howMany-1], fromBricks[howMany])){
#             howMany += 1;
#         }
#         if(fromBricks[howMany-1].n == 6){
#             for(var i= 0; i< 8; i++){
#                 if(puzzle[i].bricks.length == 0) return i;
#             }
#         }
# 
#         return -1;
#     };
# 
#     function brickInStack(currentBrick, nextBrick){
#         if(nextBrick.color == currentBrick.color && nextBrick.n == currentBrick.n +1){
#             return true;
#         }
#       
#         return false;
#     }
#     
#     undo: ->
#
