// Calling this function to get the legnth of password 
checkLengthOfPassword();
var lengthOfPassword;
function checkLengthOfPassword()
    {
        lengthOfPassword = prompt("select the length from the 8 to 128");
    }
if((lengthOfPassword < 8) || (lengthOfPassword >128))
    {
        alert('please choose the length between 8 to 128');
        checkLengthOfPassword();          
    }
if(isNaN(lengthOfPassword))
    {
        alert('please choose the length between 8 to 128');
        checkLengthOfPassword();
    }
//To get the values from checkboxes which are checked by user
    var checks = document.getElementsByClassName('checks');
    var passwordGeneratedWithArrayOf = [];
    var passwordGenerated =[];
    var c= 0;
    
    // Function to generate password
    function generatePass()
    {   
        
        for (i=0;i< checks.length;i++)
        {
            if( checks[i].checked === true)
            {
                passwordGeneratedWithArrayOf.push(checks[i].value);
            }
        }
        console.log(`${passwordGeneratedWithArrayOf}`);
                  
        for(i=0;i<passwordGeneratedWithArrayOf.length;i++)
        {
            console.log(`printing the elements ${passwordGeneratedWithArrayOf[i]}`);
        }
        if (passwordGeneratedWithArrayOf.length != 0){
        if (passwordGeneratedWithArrayOf.length ==1 )
        {          
            var charSetC = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
            var charSetS=['abcdefghijklmnopqrstuvwxyz'];
            var charSetN=['0123456789'];
            var charSetY=['!@#$%^&*'];                  
            if(passwordGeneratedWithArrayOf[0] == 'capital-letters')
            {
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithCap = charSetC[0][Math.floor(Math.random()*charSetC[0].length)];
                    passwordGenerated += pWithCap;        
                }
            }
            else if(passwordGeneratedWithArrayOf[0] == 'small-letters')
            {
               for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithSmall = charSetS[0][Math.floor(Math.random()*charSetS[0].length)];
                    passwordGenerated += pWithSmall;    
                }
            }
            else if(passwordGeneratedWithArrayOf[0] == 'numbers')
            {
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithNumber = charSetN[0][Math.floor(Math.random()*charSetN[0].length)];
                    passwordGenerated += pWithNumber;   
                }
            }
            else
            {
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithSymbols= charSetY[0][Math.floor(Math.random()*charSetY[0].length)];
                    passwordGenerated += pWithSymbols;     
                }
            }      
               console.log(`print the ${passwordGenerated}`);
               document.getElementById("textArea").value = `${passwordGenerated}`;
      
                            
        }        
        else if(passwordGeneratedWithArrayOf.length == 2)
        { 
            var charSetCS = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'];
            var charSetCN = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'];
            var charSetCY = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(*)_+'];
            var charSetSN = ['abcdefghijklmnopqrstuvwxyz123456789'];
            var charSetSY = ['abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'];
            var charSetNY= ['12345687890!@#$%^&*()'];  
            if((passwordGeneratedWithArrayOf.indexOf('capital-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('small-letters') != -1) )
            {
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithCapSmall = charSetCS[0][Math.floor(Math.random()*charSetCS[0].length)];
                    passwordGenerated += pWithCapSmall;
                }
            }
            else if((passwordGeneratedWithArrayOf.indexOf('capital-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('numbers') != -1) )
            {
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithCapNumbers = charSetCN[0][Math.floor(Math.random()*charSetCN[0].length)];
                    passwordGenerated += pWithCapNumbers;
                }
            }
            else if((passwordGeneratedWithArrayOf.indexOf('capital-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('symbol') != -1) )
            {
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithCapSymbols = charSetCY[0][Math.floor(Math.random()*charSetCY[0].length)];
                    passwordGeneratedWith += pWithCapSymbols;
                }
            }
            else if((passwordGeneratedWithArrayOf.indexOf('small-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('numbers') != -1) )
           {
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithSmallNumber = charSetSN[0][Math.floor(Math.random()*charSetSN[0].length)];
                    passwordGenerated += pWithSmallNumber;
                }
            }
            else if((passwordGeneratedWithArrayOf.indexOf('small-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('symbols') != -1) )
            {
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithSmallSymbols = charSetSY[0][Math.floor(Math.random()*charSetSY[0].length)];
                    passwordGenerated += pWithSmallSymbols;
                }
            }
            else if((passwordGeneratedWithArrayOf.indexOf('numbers') != -1) && (passwordGeneratedWithArrayOf.indexOf('symbols') != -1))
            {
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithNumberSymbol = charSetNY[0][Math.floor(Math.random()*charSetNY[0].length)];
                    passwordGenerated += pWithNumberSymbol;
                }
            }
            console.log(`password is ${passwordGenerated}`);
            document.getElementById("textArea").value = `${passwordGenerated}`;
        }    
        else if(passwordGeneratedWithArrayOf.length == 3)
        {
            var charSetCSN = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'];
            var charSetCSY = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'];
            var charSetCNY = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$$%^&*(_+'];
            var charSetSNY = ['abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'];
            if((passwordGeneratedWithArrayOf.indexOf('capital-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('small-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('numbers') != -1))
            { 
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithCapSmaNum = charSetCSN[0][Math.floor(Math.random()*charSetCSN[0].length)];
                    passwordGenerated += pWithCapSmaNum;        
               }    
            }
            else if((passwordGeneratedWithArrayOf.indexOf('capital-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('small-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('symbols') != -1))
            { 
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithCapSmaSym = charSetCSY[0][Math.floor(Math.random()*charSetCSY[0].length)];
                    passwordGenerated += pWithCapSmaSym;
                }    
            }
            else if((passwordGeneratedWithArrayOf.indexOf('capital-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('numbers') != -1) && (passwordGeneratedWithArrayOf.indexOf('symbols') != -1))
            { 
                for(i=0;i<lengthOfPassword;i++)
                {
                    var pWithCapNumSym = charSetCNY[0][Math.floor(Math.random()*charSetCNY[0].length)];
                    passwordGenerated += pWithCapNumSym;
                }    
            }
            else if((passwordGeneratedWithArrayOf.indexOf('small-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('numbers') != -1) && (passwordGeneratedWithArrayOf.indexOf('symbols') != -1))
            { 
                for(i=0;i<lengthOfPassword;i++)
                {
                   var pWithSmaNumSym = charSetSNY[0][Math.floor(Math.random()*charSetSNY[0].length)];
                   passwordGenerated += pWithSmaNumSym;
                }    
            }
            console.log(`password is ${passwordGenerated}`);
            document.getElementById("textArea").value = `${passwordGenerated}`;   
        }
        else if(passwordGeneratedWithArrayOf.length == 4)
        {
            var charSetCSNY = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'];
            if((passwordGeneratedWithArrayOf.indexOf('capital-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('small-letters') != -1) && (passwordGeneratedWithArrayOf.indexOf('numbers') != -1) && (passwordGeneratedWithArrayOf.indexOf('symbols') != -1))
            { 
               for(i=0;i<lengthOfPassword;i++)
               {
                    var pWithCapSmaNumSym = charSetCSNY[0][Math.floor(Math.random()*charSetCSNY[0].length)];
                    passwordGenerated += pWithCapSmaNumSym;    
                }    
            }
            console.log(`password is ${passwordGenerated}`);
            document.getElementById("textArea").value = `${passwordGenerated}`;       
        }
    }
    else
    {
        alert("please select atleast one option above");
    }
   
}
