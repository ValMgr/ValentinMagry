<!-- Valentin Magry - MMI Bordeaux Montaigne Student - 2019 -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Valentin Magry | Work In Progress</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="Assets/favicon.png" type="image/x-icon"/>
    <link rel="shortcut icon" href="Assets/favicon.png" type="image/x-icon"/>
    <link rel="stylesheet" type="text/css" media="screen" href="Assets/main.css" />
    
   
    


</head>
<body> 

        <div id="barba-wrapper">
            <div class="barba-container" data-namespace="contact">
                <div class="bodypage">

                        <div class="title-contact">
                                <h3 id="contact-title">CONTACT</h3>
                                <h3>ME</h3>
                        </div>
    
                        <div class="Links" id="Contact-GoBack">
                            <div class="linke">
                                <a href="index.html">GO BACK</a>
                                <span class="links_underlined"></span>
                            </div>
                        </div>

                        <div class="contact-content">
                            <form action="sendmail.php" method="post" id="form">
                                <div class="Name" id="N1">
                                    <label for="firstname" class="label">First Name</label>
                                    <input type="text" id="firstname" name="firstname">
                                </div>
                                <div class="Name" id="N2">
                                    <label for="lastname" class="label">Last Name</label>
                                    <input type="text" id="lastname" name="lastname">
                                </div>
                                <div class="email">
                                    <label for="email" class="label">E-mail</label>
                                    <input type="text" id="email" name="email">
                                </div>
                                <div class="email">
                                    <label for="email-content" class="label">Message</label>
                                    <textarea type="text" id="email-content" name="email-content"></textarea>
                                </div>
                                <input type="submit" value="SUBMIT" id="submit">
                            </form>
                        </div>



                </div>
            </div>
        </div>

        <!-- JavaScript Links -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.min.js"></script>
        <script src="Assets/main.js"></script>

</body>
</html>