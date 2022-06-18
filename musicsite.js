setInterval(myFunction, 2000);

            function myFunction() {
            let d = new Date();

                document.getElementById('demo').innerHTML = d.getHours() + ":" +
                d.getMinutes() + ":" + 
                d.getSeconds();
            }