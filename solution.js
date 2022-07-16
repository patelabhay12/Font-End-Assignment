function myFunction(str1, str2) {
    let newstr="";
    let count=0;
    let p=0;
    let l1=str1.length();
    let l2=str2.length();
    for(let j=0;j<l;++j)
    {
       let ch1=str1.charAt(p);
       let ch2=str2.charAt(j);
       if(ch1!=ch2)

       {   
            count++;

            j++;

          if(count==l1)
          {
            newstr=newstr+ch1;
            p++;
            j=0;
            count=0;
           }

       } 

       else
       {
           p++;
           count=0;
           j=0;
       }

    }
   return newstr;
}
let str1= prompt("Please enter your first string ");
let str2= prompt("Please enter your Second string ");
myFunction(str1,str2); //for string 1 to 2
myFunction(str2,str1); //for string 2 to 1
