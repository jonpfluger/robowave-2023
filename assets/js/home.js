$(document).ready(function() {
    // fullpage js
    $('#fullpage').fullpage({
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationTooltips: ['Welcome', 'New Robots', 'Used Robots', 'Contact']
    });

    // typewriterjs
    var typewriterElements = document.querySelectorAll('.typewriter-effect')
    for (var i = 0; i < typewriterElements.length; i++) {
        var currentEl = typewriterElements[i]
        var innerText = currentEl.innerText
        new Typewriter(currentEl, {
            loop: true,
        })
            .typeString(innerText)
            .pauseFor(1000)
            .start()
    }

    // powerglitch
    PowerGlitch.glitch('.glitch', {
        hideOverflow: true,
    })

    // last error date
    $('[data-lastErrorDate]').each(function() {
        // get date from data-lastErrorDate
        var errorDate = $(this).attr('data-lastErrorDate')
        // turn date into dayjs object
        errorDate = dayjs(errorDate)
        // get todays date as a dayjs object
        var todaysDate = dayjs()
        // find difference in days between dates
        var diff = todaysDate.diff(errorDate, "day")
        // determine text color class
        var textClass
        if (diff < 5) {
            textClass = 'text-danger'
        } else if (diff < 30) {
            textClass = 'text-warning'
        } else {
            textClass = 'text-success'
        }
        
        $(this)
            .text(`${diff} days since last error`)
            .addClass(textClass)
    })

    // listen for submit event on the signup form
        // prevent default
        // get the value out of the #email input
        // create a user using jsonplaceholder API
            // if successful
                // redirect to the signup-thankyou.html?email=<email here>
            

});