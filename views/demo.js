function demoPage() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="./../styles/styles.css">
        <title>Affordable Security Alert</title>
    </head>
    <body>
        <div class="demo-page">
            <nav class="nav-container">
                <div class="nav">
                        <li><a href="/">HOME</a></li>
                </div>
            </nav>
            <div class="title-container demo-title-container"> 
                <h1 class="title demo-title">Pseudo Secure Live Demo</h1>
    
                <p class="title-p demo-title-p">Click to view live demo below.</p>
            </div>
            <div class="video">
            <video controls="controls"
            name="Video Name" src="./../images/finalCapDemoVid.mov"></video>
            </div>
        </div>
    </body>
    </html>
    
    `;
}

module.exports = demoPage;