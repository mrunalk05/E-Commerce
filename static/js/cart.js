var updateBtns=document.getElementsByClassName('update-cart')
// console.log(updateBrns.length)
for(var i=0;i<updateBtns.length;i++)
{
    updateBtns[i].addEventListener('click',function(){
        var productId=this.dataset.product
        var  action=this.dataset.action
        console.log('producId:',productId,'action:',action)
        console.log('User:',user)
        if(user=='AnonymouseUser')
        {
            console.log('Not logged in')
        }
        else
        {
            console.log('User is logged in,Sending data...')
        }
    })
}