const currentUser = localStorage.getItem('currentUser')



if(currentUser){
    let prevText = $('h1').text
    $('h1').text(prevText+ currentUser)

}


// $('#logout').click(function(){
//    $('h1').text('User: ') 

   
// })