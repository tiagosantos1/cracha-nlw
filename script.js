const linksSocial = {
    github : "tiago17santos",
    youtube : "jakelinegracielly",
    instagram : "tiago17alberto",
    facebook : "maykbrito",
    twitter : "Th_silvva"
}

function changeSocialMediaLinks(){
   
    for(let li of socialLinks.children){
        let social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${linksSocial[social]}`
    }
}

changeSocialMediaLinks()

function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocial.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userFoto.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGithubProfileInfos()