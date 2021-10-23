//getData()
//append( )

async function getData(url){
    let res = await fetch(url)
    let data = await res.json()

    return data
}

function append(data,container){

    data.forEach(({ title, image}) =>{
        let div = document.createElement('div')
        let p = document.createElement('p')

        p.innerText = title
        let img = document.createElement('img')
        img.src = image

        div.append(img,p)
        container.append(div)
    })
}
export {getData,append}