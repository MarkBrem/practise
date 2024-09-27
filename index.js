
//  * 1. В html існує елемент h1 ат інпут, створіть функцію яка приймає ім'я користувача з поля для вводу та виводить його як заголовок. Перепишіть функцію
//  * всіма відомими вам способами. 
//  * 2. Створіть форму з полем email та кнопкою за допомогою шаблонного рядка та
//  * додайте її в DOM. Під час сабміту форми вивести повідомлення "Дякую за
//  * підписку", яке буде зникати через 1500мс
//  * 3. У вам є розмітка в html
//  * <div class="holder">
//   <h1>Title</h1>
//   <ul class="list">
//     <li>
//       <a href="#">link1</a>
//       <ul>
//         <li>
//           <a href="#">link2</a>
//         </li>
//         <li>
//           <a href="#">link3</a>
//         </li>
//       </ul>
//     </li>
//     <li>
//       <a href="https://www.youtube.com/">link4</a>
//     </li>
//     <li>
//       <a href="https://validator.w3.org/">link5</a>
//     </li>
//     <li>
//       <a href="#">link6</a>
//     </li>
//   </ul>
//   <p>
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, accusamus.
//   </p>
//   <h1>Title</h1>
//   <p>Lorem ipsum dolor sit amet.</p>
// </div>
// - зверніться через JS тільки до тих посилань, значення атрибутів href яких починається з https та зробіть їх червоного кольору;
// - зверніться через JS до <p>, який іде після <ul> і зробіть розмір його шрифта 24рх.
//  * 4. 
//  *
// 

// const input1Ref = document.querySelector('.input-1')
// const btn1Ref = document.querySelector('.btn-1')
// const textRef = document.querySelector('.text')


// btn1Ref.addEventListener('click', ()=>{
//     const name = input1Ref.value
//     textRef.textContent = name
// })

// input1Ref.addEventListener('input', (event)=>{
//     textRef.textContent = event.target.value
// })


// const formRef = document.querySelector('.form')
// const messageRef = document.querySelector('.message')

// const formTemplate = `
//     <form id="subscription-form">
//         <label for="email">Email:</label>
//         <input type="email" class="email" name="email" required placeholder="Введіть ваш email">
//         <button type="submit">Підписатися</button>
//     </form>
// `;
// formRef.innerHTML = formTemplate;

// formRef.addEventListener('submit', onSubmit)

// function onSubmit(event){
//     event.preventDefault();  
//     messageRef.style.display = 'block'

//     setTimeout(()=>{
//         messageRef.style.display = 'none'
//     }, 1500)
// }


const links = document.querySelectorAll('.holder a');

links.forEach(link => {
    if (link.href.startsWith('https')) {
        link.style.color = 'red';
    }
});

const ul = document.querySelector('.holder ul');
const paragraphAfterUl = ul.nextElementSibling;

        
if (paragraphAfterUl.tagName.toLowerCase() === 'p') {
    paragraphAfterUl.style.fontSize = '24px';
}