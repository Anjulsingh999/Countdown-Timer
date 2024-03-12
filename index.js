    // let display = document.getElementById("display_timer");
    let days = document.getElementById("days_box");
    let hours = document.getElementById("hours_box");
    let minutes = document.getElementById("minutes_box");
    let seconds = document.getElementById("seconds_box");

    let target_date = new Date("01 01, 2025 00:00:00");
    let today_date = new Date();
    //new Date("month date, Year hour:minutes:second");

    //time-----------------------
    let h1 = target_date.getHours();
    let m1 = target_date.getMinutes();
    let s1 = target_date.getSeconds();
    // console.log(mt1+" "+d1+" "+h1+" "+m1+" "+s1)

    let h2 = today_date.getHours();
    let m2 = today_date.getMinutes();
    let s2 = today_date.getSeconds();
    // console.log(mt2+" "+d2+" "+h2+" "+m2+" "+s2)


    let s3 = s1 - s2 + 60;
    let m3 = m1 - m2 + 59;
    let h3 = h1 - h2 + 23;


    
    //days--------------------------
    let y1 = target_date.getFullYear();
    let mt1 = target_date.getMonth();
    let d1 = target_date.getDate();

    let y2 = today_date.getFullYear();
    let mt2 = today_date.getMonth();
    let d2 = today_date.getDate();


    const utcStartDate = Date.UTC(y1, mt1, d1);
    const utcEndDate = Date.UTC(y2, mt2, d2);

    const millisecondsPerDay = 24 * 60 * 60 * 1000; 
    const timeDifference = utcEndDate - utcStartDate;

    let daysDifference = Math.abs(Math.floor(timeDifference / millisecondsPerDay));

    // console.log(daysDifference+" : "+h3 + " : " + m3 + " : " + s3)

    let timer = null;



    function interval()
    {
        s3--;
        if(s3==-1)
        {
            s3=60;
            s3--;
            m3--;
            if(m3==-1)
            {
                m3=60;
                m3--;
                h3--;
                if(h3==-1)
                {
                    h3=24;
                    h3--;
                    daysDifference--;
                    if(daysDifference==-1)
                    {
                        daysDifference=0;    
                        myStopFunction();
                        
                     
                    }
                }
            }
        }
        
        // display.innerHTML=daysDifference+"   "+h3 + "   " + m3 + "   " + s3;
        days.innerHTML=daysDifference;
        hours.innerHTML=h3;
        minutes.innerHTML=m3;
        seconds.innerHTML=s3;


    }

    
    if (timer !== null) {
        clearInterval(timer)
    }

    timer = setInterval(interval, 1000);



    function myStopFunction() {
        clearInterval(timer);
        s3=0;
        m3=0;
        h3=0;
        daysDifference=0;
        end_timer();
      }


    function end_timer()
    {
        display.innerText="Let Celebrate the Moments";
        console.log("Let Celebrate the Moments")
    }

  



    


