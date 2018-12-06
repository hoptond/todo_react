
// document.addEventListener('click', function(e) {
//     e.preventDefault()
//     if (e.target.type === 'checkbox') {
//         let data = JSON.stringify({status: e.target.checked})
//         var request = new XMLHttpRequest()
//         request.open('PUT', 'localhost:8080/todos/' + e.target.name, true)
//         request.setRequestHeader("Content-Type", "application/json")
//         request.send(data)
//         console.log('status update sent!')
//         request.onload = function() {
//             if (this.status >= 200 && this.status < 400) {
//                 console.log('great success')
//                 // TODO: update the checkbox on our end
//             } else {
//                 console.log('great unsuccess')
//             }
//         };
//         request.onerror = function() {
//             console.log('great unsuccess of the even worse kind!')
//         };
//     } else if (e.target.type === 'submit') {
//         let data = JSON.stringify({desc: e.target.value})
//         let request = new XMLHttpRequest()
//         request.open('POST', 'localhost:8080/todos/', true)
//         request.setRequestHeader("Content-Type", "application/json")
//         request.send(data)
//         console.log('new task sent!')
//         request.onload = function() {
//             if (this.status >= 200 && this.status < 400) {
//                 console.log('great success')
//                 // TODO: add the data on our end
//                 e.target.value = ''
//             } else {
//                 console.log('great unsuccess')
//             }
//         };
//     }
// })