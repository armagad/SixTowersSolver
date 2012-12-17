(angular.module 'SomeApp', []).filter 'numeric', ->
  (input) ->
    return 3 if input is '?'
    input

import prelude

moveTower = (puzzle, step) ->
  $scope.towers[iTo].bricks = (let $_ = $scope.towers[iFrom].bricks
    $_.splice 0, (keyBrick $_).depth) +++ $scope.towers[iTo].bricks

  if not @solved
    #$scope.solution.push fromTower: iFrom, toTower: iTo, penalty: 0
    $scope.penaltyPoints = sum map (.penalty) $scope.solution

bestMoves = (puzzle) ->
  keyBricks = map (.bricks), puzzle |> map keyBrick
  possibleTos = map (.bricks), puzzle |> map head

  #best
  i = 0
  while i < 8
    j = 0
    while j < 8
      return [penalty: 0 iFrom: i iTo: j] if brickInStack keyBricks[i], possibleTos[j]
      j++
    i++

  #better
  
  #good
  []

isDoneOrEmpty = (towerBricks) ->
  return true if towerBricks.length is 0
  return true if map (.n), towerBricks is [0 to 6] and (map (.color), towerBricks |> unique |> (.length)) is 1
  false

findSolution = (puzzle, steps) ->
  return if window.globalsBad.solution is not [] and steps.length > window.globalsBad.solution.length
  return if window.globalsBad.penaltyMax < sum map (.penalty), steps
  if map (.bricks), puzzle |> all isDoneOrEmpty
    window.globalsBad.solution = steps

  let $_ = bestMoves puzzle
    findSolution moveTower $_, steps+++ $_ if $_

keyBrick = (towerBricks) ->
  depth = 1
  while depth < towerBricks.length and brickInStack towerBricks[depth - 1], towerBricks[depth]
    depth += 1
  towerBricks[depth-1].depth = depth
  towerBricks[depth-1]

brickInStack = (currentBrick, nextBrick) ->
  false
  true if nextBrick.color is currentBrick.color and nextBrick.n is currentBrick.n + 1

TowerLogic = ($scope) ->

  $scope.solving = 0
  $scope.maxPenalty = 25
  $scope.penaltyPoints = 0
  $scope.solution = []
  $scope.towers   = [
    {index: 0, bricks: [{n:3 color:\orange},{n:6 color:\orange},{n:1 color:\red   },{n:0 color:\red   },{n:0 color:\blue  },{n:4 color:\cyan  }]},
    {index: 1, bricks: [{n:3 color:\red   },{n:0 color:\green },{n:2 color:\red   },{n:3 color:\cyan  },{n:5 color:\cyan  },{n:6 color:\cyan  }]},
    {index: 2, bricks:                     [{n:4 color:\green },{n:1 color:\cyan  },{n:3 color:\violet},{n:4 color:\violet},{n:5 color:\violet}]},
    {index: 3, bricks:                     [{n:0 color:\violet},{n:1 color:\violet},{n:2 color:\violet},{n:1 color:\orange},{n:2 color:\orange}]},
    {index: 4, bricks:                     [{n:4 color:\orange},{n:0 color:\orange},{n:4 color:\red   },{n:5 color:\red   },{n:0 color:\cyan  }]},
    {index: 5, bricks:                     [{n:3 color:\green },{n:5 color:\orange},{n:1 color:\green },{n:2 color:\green },{n:5 color:\green }]},
    {index: 6, bricks:                     [{n:3 color:\blue  },{n:4 color:\blue  },{n:5 color:\blue  },{n:6 color:\blue  },{n:6 color:\violet}]},
    {index: 7, bricks:                     [{n:2 color:\cyan  },{n:6 color:\green },{n:2 color:\blue  },{n:6 color:\red   },{n:1 color:\blue  }]}]

  $scope.solve = ->
    window.globalsBad = $scope
    $scope.solving = 1
    $scope.solution = []
    $scope.solved = findSolution @towers, [] |> (.length)
    $scope.solving = 0

  $scope.aiMove = ->
    nextMove = @bestMove!
    $scope.solution = moveBricks nextMove.iFrom, nextMove.iTo

  $scope.bestMove = ->
    @fake.shift! # penalty: 0 iFrom: 0 iTo: 4
  $scope.fake = [{penalty:0 iFrom:0 iTo:4}, {penalty:0 iFrom:5 iTo:2}, {penalty:0 iFrom:4 iTo:5}, {penalty:0 iFrom:5 iTo:0}, {penalty:0 iFrom:5 iTo:2}, {penalty:0 iFrom:2 iTo:5}, {penalty:0 iFrom:2 iTo:7}, {penalty:0 iFrom:3 iTo:2}, {penalty:0 iFrom:3 iTo:0}, {penalty:0 iFrom:4 iTo:0}, {penalty:0 iFrom:1 iTo:4}, {penalty:0 iFrom:1 iTo:5}, {penalty:0 iFrom:1 iTo:4}, {penalty:0 iFrom:7 iTo:1}, {penalty:0 iFrom:5 iTo:7}]

  $scope.newPuzzle = ->
    $scope.towers = [index: 0, bricks: [{n:'?' color:\grey}] * 6] * 2 +++ [index: 0, bricks: [{n:'?' color:\grey}] * 5] * 6

  $scope.moveBricks = (iFrom, iTo) ->
    $scope.towers[iTo].bricks = (let $_ = $scope.towers[iFrom].bricks
      $_.splice 0, (keyBrick $_).depth) +++ $scope.towers[iTo].bricks

    if not @solved
      #$scope.solution.push fromTower: iFrom, toTower: iTo, penalty: 0
      $scope.penaltyPoints = sum map (.penalty) $scope.solution
