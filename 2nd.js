 const isleapyear = (year) => year % 4 === 0;

 console.log(isleapyear(2024));
 console.log(isleapyear(2026));
 console.log(isleapyear(2001));
 console.log(isleapyear(2000));
 console.log(isleapyear(2029));
 console.log(isleapyear(2002));
 console.log(isleapyear(2044));
 console.log(isleapyear(2045));
 console.log(isleapyear(2040));
 console.log(isleapyear(2030));
 

 //genarate random hexadecimal color


 const getRendomhexnumber  = () =>
    Math.floor(Math.random() * 16).toString(16);

 const getrendomcolor = () => "#" + Array.from({
    length: 6}).map(getRendomhexnumber).join("");
    
 console.log(getrendomcolor());
 console.log(getrendomcolor());
 console.log(getrendomcolor());
 console.log(getrendomcolor());
 console.log(getrendomcolor());
 console.log(getrendomcolor());
 console.log(getrendomcolor());
 
    
    
    
 