<?php
session_start();
$_SESSION = array();
session_destroy();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="wrapper">
    <form action="q_1.php" method='post'>
        <p class='name'><input type="text" placeholder="名前を入れてください" name = 'user_name'></span></p>
        <p class = 'sub'><input type="submit" name='sub' value='クイズを始める'></p>
    </form>
</div>
</body>
</html>