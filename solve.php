<?
   
$puzzle = json_decode(file_get_contents($argv[1]));

simpleSearch:
for($i = 0; $i< 8; $i++){

    $x = 0;
    do list($lowNumbr, $topColor) = $puzzle[$i][$x++];
    while($puzzle[$i][$x][0] == $lowNumbr + 1 && $puzzle[$i][$x][1] == $topColor);

    for($j = 0; $j< 8; $j++){
        if($j == $i) continue;

        if($puzzle[$j][0][0] == $lowNumbr +1 && $puzzle[$j][0][1] == $topColor){
            move_tower($i,$j,[$lowNumbr,$topColor]);
            goto simpleSearch;
        }
    }
}

function cli_colorize($str){
    return "\033[". [R=>'0;31', G=>'0;32', B=>'0;34', O=>'0;33', V=>'1;35', C=>'0;36'][$GLOBALS[topColor]]. 'm'. $str. "\033[0m";
}

function move_tower($i,$j,$maxima){
    $direction = '»'; if($j < $i) $direction = '«';
    // foreach(range(0,7) as $_){
    //     print " ";
    //          if($_ == $j)                           print cli_colorize($GLOBALS[puzzle][$j][0][0]);
    //     else if($_ == $i)                           print cli_colorize($maxima[0]);
    //     else if($_ > min($i,$j) && $_ < max($i,$j)) print $direction;
    //     else                                        print "-";
    //     print " ";
    // }
    // 
    // // print " : ". [R=>"Red   ", G=>"Green ", B=>"Blue  ", O=>"Orange", V=>"Violet", C=>"Cyan  "][$topColor];
    // print "\n";

    print "[$i,$j]\n";

    $tmp = [];
    do $tmp[] = array_shift($GLOBALS[puzzle][$i]);
    while(end($tmp) != $maxima);
    $GLOBALS[puzzle][$j] = array_merge($tmp,$GLOBALS[puzzle][$j]);
    
}