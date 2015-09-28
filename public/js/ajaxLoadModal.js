function showLogs(logType) {
    return function() {
        var caseId = document.getElementById('case-id').value;
        if (caseId === "") {
            console.log('Please select a case, or save the one you are working on.');
            return;
        } else {
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    $('#myModal .modal-body').innerHTML = xmlhttp.responseText;
                }
            };
            xmlhttp.open("GET", "cases?case=" + caseId + "&logtype=" + logType, true);
            xmlhttp.send();
        }
    };
}
$('.modal-log-button').each(function() {
    var thisLog = $(this).attr('name');
    $(this).click(
        showLogs(thisLog)
    );
});
