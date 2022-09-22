var rndotp = Math.floor(10000 + Math.random() * 90000);
        var useremail=localStorage.getItem("Email");
        function verfiyotp(){
            var inputotp=document.getElementById("otp").value;
            if(inputotp==""){
                alert("OTP field Can't Be Blank");
                document.getElementById("hidesubmit").classList.add("invisible");
                document.getElementById("otp").classList.add("invisible");
                document.getElementById("enableotp").classList.remove("invisible")


            }
            else if(inputotp!=rndotp){
                alert("OTP doesn't Match");
                document.getElementById("resendotp").classList.remove("invisible")
                document.getElementById("hidesubmit").classList.add("invisible");
                
            }
            
            else{
                document.getElementById("newpassword").classList.remove("invisible");
                document.getElementById("unablerstpass").classList.remove("invisible")
                document.getElementById("hidesubmit").classList.add("invisible")
                //document.getElementById("resendotp").classList.add("invisible")
            }

        }
        function resetpassword(){
            var newpass=document.getElementById("newpassword").value;
            //localStorage.clear();
            localStorage.setItem("Password",newpass);
            //if (window.confirm('Really go to another page?')) {
                
                window.location.href="login.html"; 
            //}
            
        }
        function rsotp(){
            document.getElementById('otp').value = "";
            rndotp = Math.floor(10000 + Math.random() * 90000);
            alert("Your OTP : " +rndotp);
            document.getElementById("hidesubmit").classList.remove("invisible");
            document.getElementById("resendotp").classList.add("invisible");

            

        }
        
        function checkemailexist(){
            var email=document.getElementById("email").value;
            if(useremail!=email){
                var pemail = document.getElementById("emailerror");
                pemail.classList.remove("d-none");
                

            }
            else {
                var aemail = document.getElementById("emailerror");
                aemail.classList.add("d-none");
                document.getElementById("enableotp").classList.remove("invisible")
                
            }


        }
        function getotp(){
            var email=document.getElementById("email").value;
            if(useremail=email){
            
            alert("Your OTP : " +rndotp);
            document.getElementById("enableotp").classList.add("invisible");
            document.getElementById("otp").classList.remove("invisible");
            document.getElementById("hidesubmit").classList.remove("invisible");
            

            }


        }
        function checknewpass(){
            var n =document.getElementById("newpassword").value;
            var t=/[A-Z][a-z]{3}(!|@|#|$|%|\^|\&|\*)[0-9]{3}/;
            if (t.test(n)){
                alert("Error");
            }
        }