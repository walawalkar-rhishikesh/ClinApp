
init();
function init(){
    popNotification('success', 'GREETING:',`Welcome to ClinApp.`)
}

function popNotification(type, title, message){
    // let notificationContainer = document.getElementsByClassName('notification-container');
    // let notificationBox = notificationContainer.createElement('div');

    let notificationBox = ` <div`

    switch(type){
        case 'success':
            notificationBox += ` class="alert alert-success alert-dismissible in"`
            // notificationBox.classList.add("alert alert-success alert-dismissible in");
            break;
        case 'info':
            notificationBox += ` class="alert alert-info alert-dismissible in"`
            // notificationBox.classList.add("alert alert-info alert-dismissible in");
            break;
        case 'warning':
            notificationBox += ` class="alert alert-warning alert-dismissible in"`
            // notificationBox.classList.add("alert alert-warning alert-dismissible in");
            break;
        case 'danger':
            notificationBox += ` class="alert alert-danger alert-dismissible in"`
            // notificationBox.classList.add("alert alert-danger alert-dismissible in");
            break;
    }
    notificationBox += `>`;
    ( title && message )
                    ? notificationBox += `<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>${title}</strong> ${message} </div>`
                    :
                    notificationBox = '';

    $('.notification-container').append(notificationBox);
    // notificationBox.innerHTML(`<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    // <strong>Success!</strong> ${title}`);
}

