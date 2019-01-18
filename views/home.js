function homePage(content) {

    let route;

    if (content === 'logout') {
        route = `
        <li><a href="/dashboard">DASHBOARD</a></li>
        <form action="/logout" method="POST">
        <button class="editprofile-btn">LOGOUT</button></form>`;
    } else {
        route = `
        <li><a href="/signup">SIGNUP</a></li>
        <li><a href="/login">LOGIN</a></li>`;
        
    }

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
    <div class="landing-page">
        <nav class="nav-container">
            <div class="nav">
                    ${route}
            </div>
        </nav>
        <div class="title-container"> 
            <h1 class="title">The Pseudo Secure Initiative</h1>

            <p class="title-p">No one should have to budget for peace of mind.</p>
        </div>
        <div class="button-container">
            <a href="/buildProcess" class="btn-1">ABOUT PSI</a>
            <a href="/demo" class="btn-2">LIVE DEMO</a>
        </div>
    </div>
    <script src="scripts/index.js"></script>
</body>
</html>
    `;
}

module.exports = homePage;