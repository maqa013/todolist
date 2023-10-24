
const users = JSON.parse(localStorage.getItem('users'))






$('.place').on('input',function(){

   if(
    $('#place2').val().length >=2 &&
    $('#place1').val().length >=2 

   ){
    $('.btn').attr('disabled',false)
   }else{
    $('.btn').attr('disabled',true)
   }
 
})



 $('.btn').on('submit',function(event){
    event.preventDefault()

let usersExist = users.some((user) => user.name === $('#place2').val() && user.password === $('#place1').val())




if(usersExist){


    location.href = '../main.html'  
    localStorage.setItem('currentUser', $('#place2').val())
    $('.place').val('')
}else{
    alert('Your password or name is incorrect')
}

 })





// $('button').click(function(){
//     location.href = '../main.html'
// })



