var usermail=localStorage.getItem("Email");
        var upassword=localStorage.getItem("Password");
        function login(){
            var email=document.getElementById("email").value;
            var password=document.getElementById("password").value;
            if((usermail==email) && (upassword==password))
            {
                alert("Login Successfull")
                window.location.href = "studentscreen.html";
            }
            else if((document.getElementById('email').value == "") ||(document.getElementById('password').value== "") ){
                
                if((document.getElementById('email').value == "") && (document.getElementById('password').value== "")){
                alert("Both Email and Password Can't be Blank")
                }
                else if(document.getElementById('email').value == "")
                {
                    alert("Email Can't be Blank");
                    document.getElementById('password').value = "";
                }
                else if(document.getElementById('password').value == "")
                {
                    alert("Password Can't be Blank");
                    document.getElementById('email').value = "";

                }
                
            }
            else{
                alert("You Have entered invalid credential,Either Your email or password is incorrect ")
                document.getElementById('email').value = "";
                document.getElementById('password').value = "";
            }
            
            

        }
        
    