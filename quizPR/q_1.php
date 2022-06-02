<?php
if(!isset($_POST['sub'])):
    exit('error');
else:
    session_start();
$_SESSION['username'] = $_POST['user_name'];
$URL = mysqli_connect('localhost','root','','myquiz');
mysqli_set_charset($URL,'UTF8');
$random = rand(1,4);
$sql = 'SELECT * FROM `sports`';
$rst = mysqli_query($URL,$sql);
$_SESSION['Number']= 0;
while($row=mysqli_fetch_array($rst)){
   if($random == $row['id']):
    $question = $row['quetion'];
    $first = $row['first'];
    $second = $row['second'];
    $third = $row['third'];
    $_SESSION['explanation_1'] = $row['explanation'];
    $_SESSION['answer'] = $row['answer'];
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
   
    <h2>ようこそ!<?php print $_SESSION['username'];?>さん<br>
    楽しんでいってください</h2>
     <div class="question_out">
        <div class="question_in">
            <form action="./q_2.php" method='post' required="required">
               <h3><?php print $question ?></h3>
               <div class="question_question">
                   <p><input type="checkbox" id='id1' onclick="chbx(this)" name = 'ans[]' value=<?php print $first?>><?php print $first?></p>
                   <p><input type="checkbox" id='id2' onclick="chbx(this)" name = 'ans[]' value=<?php print $second?>><?php print $second?></p>
                   <p><input type="checkbox" id='id3' onclick="chbx(this)" name = 'ans[]' value=<?php print $third?>><?php print $third?></p>
                </div>
                <p><input type="submit" class ='sub'name ='sub' value="送信"></p>
            </form> 
            <p><progress value="0" max="100">1問目</progress>1/4問目</p>
       </div>
    </div>
</body>
</html>


