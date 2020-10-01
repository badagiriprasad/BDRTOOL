function sendPdf(){


        var evPar = JSON.parse(localStorage.getItem("report"));

    // var evPar = {
    //           "html": "<body>Test</body>  ",
    //           "body": "E-mail body",
    //           "fromName": "From name",
    //           "emailSubject": "Email subject",
    //           "filename": "Test.pdf",
    //           "toAddresses":["testemailhua2016@gmail.com"]
    //         };

           // this.storage.set("report", JSON.stringify(evPar));
            




           Ti.App.fireEvent('sendStatsFromHTML',{'event_name':'event_redirect_sendPDF','event_params':evPar});
            localStorage.removeItem('report');
            alert("email sent from pitcher service!");
}