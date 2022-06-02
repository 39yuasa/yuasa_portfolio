<?php
if(!isset($_POST['sub'])):
    exit('error');
else:
session_start();
foreach($_POST['ans'] as $user_answer ):   
    $_SESSION['queAns_2']= $user_answer;
    $_SESSION['second_question'] = $_SESSION['answer'];
if($user_answer== $_SESSION['answer']):

    $_SESSION['Number'] += 1;
    unset($_SESSION['answer']);
endif;
endforeach;
$URL = mysqli_connect('localhost','root','','myquiz');
mysqli_set_charset($URL,'UTF8');

$random = rand(1,4);
$sql = 'SELECT * FROM `hobby`';
$rst = mysqli_query($URL,$sql);

while($row=mysqli_fetch_array($rst)){
   if($random == $row['id']):
    $question = $row['question'];
    $first = $row['first'];
    $second = $row['second'];
    $third = $row['third'];
    $_SESSION['answer'] = $row['answer'];
    $_SESSION['explanation_3']=$row['explanation'];
    endif;
}
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
    <script src='./js/script.js' defer></script>
</head>
<body>
<h2>ようこそ!<?php print $_SESSION['username'];?>さん、楽しんでいってください</h2>
<div class="question_out">
    <div class="question_in"><form action="./q_4.php" method='post'>
        <h3><?php print $question ?></h3>
        <div class="question_question">
            <p><input type="checkbox" id='id1' onclick="chbx(this)" name = 'ans[]' value=<?php print $first?>><?php print $first?></p>
            <p><input type="checkbox" id='id2' onclick="chbx(this)" name = 'ans[]' value=<?php print $second?>><?php print $second?></p>
            <p><input type="checkbox" id='id3' onclick="chbx(this)" name = 'ans[]' value=<?php print $third?>><?php print $third?></p>
        </div>
        <p><input type="submit" class ='sub' name ='sub' value="送信"></p>
        <p><progress value="50" max="100">3問目</progress> 3/4問目</p>
    </div>
</div>
</form> 

</body>
</html>



