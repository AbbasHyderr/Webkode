let saveFile = () => {
    // Get the data from each element on the form.
    const teamName = document.getElementById('teamname');
    const teamLead = document.getElementById('teamleadname');
    const teamLeadEmail = document.getElementById('teamleademail');
    const teamLeadNo = document.getElementById('teamleadno');
    const teamType = document.getElementById('options');
    const m1name = document.getElementById('team1name');
    const m1email = document.getElementById('team1email');
    const m2name = document.getElementById('team2name');
    const m2email = document.getElementById('team2email');
    const m3name = document.getElementById('team3name');
    const m3email = document.getElementById('team3email');
    const batch = document.getElementById('optradio');

    // This variable stores all the data.
    let data = "\r Name: " + teamName.value + " \r\n " + "Age: " + teamLead.value + " \r\n " + "Email: " + teamLeadEmail.value + " \r\n " + "Country: " + teamLeadNo.value + " \r\n " + "Message: " + teamType.value + "Country: " + m1name.value + " \r\n " + "Country: " + m1email.value + " \r\n " + "Country: " + m2name.value + " \r\n " + "Country: " + m2email.value + " \r\n " + "Country: " + m3name.value + " \r\n " + "Country: " + m3email.value + " \r\n " + "Country: " + batch.value;
    console.log(data); //printing form data into the console
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    var filename = new Date();
    var month =new Date(); //months from 1-12
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = filename; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};