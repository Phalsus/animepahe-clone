

$(document).ready(function(){


    let GOHS1EP01 = {
        video: "./GOH_video/The_God_of_High_School_-_01_BD_1080p.mp4",
        Image: "./",
        Episode: 1,
        Name: "The God of High-school",
    }
    let GOHS1EP02 = {
        video: "./GOH_video/The_God_of_High_School_-_02_BD_1080p.mp4",
        Image: "./",
        Episode: 2,
        Name: "The God of Highschool",
    }
    let GOHS1EP03 = {
        video: "./GOH_video/The_God_of_High_School_-_03_BD_1080p.mp4",
        Image: "./",
        Episode: 3,
        Name: "The God of Highschool",
    }
    let GOHS1EP04 = {
        video: "./GOH_video/The_God_of_High_School_-_04_BD_1080p.mp4",
        Image: "./",
        Episode: 4,
        Name: "The God of Highschool",
    }
    let GOHS1EP05 = {
        video: "./GOH_video/The_God_of_High_School_-_05_BD_1080p.mp4",
        Image: "./",
        Episode: 5,
        Name: "The God of Highschool",
    }
    let GOHS1EP06 = {
        video: "./GOH_video/The_God_of_High_School_-_06_BD_1080p.mp4",
        Image: "./",
        Episode: 6,
        Name: "The God of Highschool",
    }
    
    
    let GodOfHighschool={
        Episode1: GOHS1EP01,
        Episode2: GOHS1EP02,
        Episode3: GOHS1EP03,
        Episode4: GOHS1EP04,
        Episode5: GOHS1EP05,
        Episode6: GOHS1EP06,
    
    }

    alert(GodOfHighschool.Episode1.Name)
    

    for (const i in GodOfHighschool) {
        
        let n = document.createElement("anime")
        n.className = "anime"
        document.body.append(n)
        n.getElementsByClassName("title").innerText = GodOfHighschool.Episode1.Name
            
        
    }
    

})