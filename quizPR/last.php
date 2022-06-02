<?php 
if(!isset($_POST['sub'])):
    header('Location:login.php');
else:
session_start();
$score= $_SESSION['Number'];
$score_int = (int)$score;
$name = $_SESSION['username'];
$array = array($name,$score);
$URL = mysqli_connect('localhost','root','','myquiz');
$stmt_1 = $URL -> prepare('insert into player SET name = ? , score= ? ');
$arr = array("name"=>$name,"score"=>$score_int);
$stmt_1 -> bind_param('ss',$arr['name'],$arr['score']);

$ret = $stmt_1->execute();
if($ret):
echo 'データを挿入しました';
else:
    echo $URL-> error;
endif;
$_SESSION = array();
session_destroy();
endif;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="" method='get'>
    <p><input type="submit" nam='judge' value ='ログイン画面に戻る'></p>
</form>
</body>
</html>