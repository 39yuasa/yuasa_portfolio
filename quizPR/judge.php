<?php 
if(!isset($_POST['sub'])):
    exit('error');
else:
session_start();
foreach($_POST['ans'] as $user_answer ):   
     $_SESSION['queAns_4']= $user_answer;
        $_SESSION['four_question'] = $_SESSION['answer'];
    if($user_answer== $_SESSION['answer']):
    
        $_SESSION['Number'] += 1;
        unset($_SESSION['answer']);
    endif;
endforeach;
endif;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/reset.css" />
    <link rel="stylesheet" href="./css/style.css" />
</head>
<body>
    <div class="questions">
        <h3><?php print $_SESSION['username'];?>さんの正解数は<?php print $_SESSION['Number'];?>点です</h3>
        <div class="question_end">
            <h2>1問目の正解は<?php print $_SESSION['first_question']  ;?>です</h2>
            <P>あなたの答え:<?php print $_SESSION['queAns_1'] ;?>でした</p>
            <p>解説:<?php  print $_SESSION['explanation_1'] ;?></p>
        </div>
        <div class="question_end">
            <h2>2問目の正解は<?php print $_SESSION['second_question'] ;?></h2>
            <P>あなたの答え:<?php print $_SESSION['queAns_2'] ;?>でした</p>
            <p>解説:<?php  print $_SESSION['explanation_2'] ;?></p>
        </div>
        <div class="question_end">
           <h2>3問目の正解は<?php print $_SESSION['third_question']  ;?>です</h2>
           <P>あなたの答え:<?php print $_SESSION['queAns_3'] ;?>でした</p>
           <p>解説:<?php  print $_SESSION['explanation_3'] ;?></p>
        </div>
        <div class="question_end">
           <h2>4問目の正解は<?php print $_SESSION['four_question']  ;?>です</h2>
           <P>あなたの答え:<?php print $_SESSION['queAns_4'] ;?>でした</p>
           <p>解説:<?php  print $_SESSION['explanation_4'] ;?></p>
        </div>
    </div>
        <form action="last.php" method='post'>
        <input type="submit" class='sub' name = 'sub' value='点数を送信する'>
    </form>
    
</body>
</html>