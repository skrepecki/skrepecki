function get_list_all_images(docsSnap){
    docsSnap.forEach(doc => {
     
        console.log(doc.data());
    }) 
}