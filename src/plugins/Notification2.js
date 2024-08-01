//i use sweetalert2
import Swal, { sweetAlert} from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'


class Message {
 
 
 successToast(){
    Swal.fire({
        title: 'Toast example',
        icon: 'success',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
 }

successPopUp(){
    Swal.fire({
        title: 'Hello Vue.js!',
        text: 'successfully Done!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
}



PopupDelete(){
  Swal.fire({
    title:'Are you sure?',
    text:"You won't be able this!",
    icon:'warning',
    showCancelButton:true,
    confirmButtonColor:'#3085d6',
    cancelButtonColor:'#d33',
    confirmButtonText:'Yes, delete it!',
  }).then((result)=>{
    if(result.value){
      Swal.fire(
        'Deleted!',
        "Your file has been deleted.",
        "success"
      );
    }
  });
}


}

export default new Message();


