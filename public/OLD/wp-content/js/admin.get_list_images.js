function get_list_all_images(docsSnap){
    let html_item_content = ''
    docsSnap.forEach(doc => {
        html_item_content +=  create_item_element(doc.data().img, doc.data().title, doc.data().description, doc.data().slug, doc.data().time)
       // console.log(doc.data());
        
    }) 
    document.getElementById('admin_section').innerHTML = html_item_content
}

function create_item_element(image, title, description, slug, time){
    return `<div>
        <img src="`+image+`" class="image">
        <input type="text" placeholder="time" id="time" value="`+time+`">
        <input type="text" placeholder="title" id="title" value="`+title+`">
        <textarea>`+description+`</textarea>
        <input type="text" placeholder="slug" id="slug">
        <input type="button" value="Save" id="save_item">
        </div>`
}

