//Task 2

const urls = ['https://www.example.com/public/12765/assets/images/thumbs/5/40_40/image1.jpg',
    'https://www.example.com/private/assets/76345/images/thumbs/12/42_46/image2.jpg',
    'https://www.example.com/protected/assets/images/35678/thumbs/100/35_40/image3.jpg'
]



const urlParser = (arrayOfUrls) => {
    //adding a regular expression and allow one extra optional digit (in case of more images)
    const regEx = /\d\d\d\d\d\d?/gm
    const newArray = arrayOfUrls.map((url) => {
        return url.match(regEx)
    })
    return `[const output = ${newArray}]`
}

console.log(urlParser(urls))