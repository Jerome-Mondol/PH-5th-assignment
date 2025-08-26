import { cardData } from './cards.js'
let cardsParent = document.querySelector('#cards');
let heartCount = 0;
let coinCount = 100;
let copyCount = 0; 

const hearts = document.querySelector('#heart-count');
hearts.innerText = heartCount;
const coins = document.querySelector('#coin-count');
coins.innerText = coinCount;
const copies = document.querySelector('#copy-count');
copies.innerText = copyCount;


for(let i = 0; i < cardData.length; i++) { 
    let childCard = document.createElement('div');
    childCard.classList.add('bg-white', 'h-80', 'rounded-lg', 'shadow-sm', 'flex', 'flex-col','p-9');
    let childCardElemImg = document.createElement('img');
    let childCardElemLove = document.createElement('i');
    childCardElemLove.classList.add('fa-regular', 'fa-heart', 'text-2xl');
    let childCardElemImgContainer = document.createElement('div');
    childCardElemImgContainer.classList.add('flex', 'items-center', 'justify-between');
    let childCardElemTitle = document.createElement('h1');
    let childCardElemSubTitle = document.createElement('p');
    let childCardElemTel = document.createElement('p');
    let childCardElemCategory = document.createElement('span');
    let childCardElemBTNContainer = document.createElement('div');
    childCardElemBTNContainer.classList.add('flex', 'justify-between', 'mt-5');
    let childCardElemCopyBTN = document.createElement('button');
    let childCardElemCallBTN = document.createElement('button');


    const childCardImg = cardData[i].img;
    const childCardTitle = cardData[i].title;
    const childCardSubTitle = cardData[i].subTitle;
    const childCardTel = cardData[i].tel;
    const childCardCategory = cardData[i].category;

    
    childCardElemImg.src = childCardImg;
    childCardElemImg.classList.add("w-10", "h-10", "bg-red-500/50", "p-2", "rounded-lg");

    childCardElemTitle.innerText = childCardTitle;
    childCardElemTitle.classList.add('text-xl', 'font-bold', 'mt-3');

    childCardElemSubTitle.innerText = childCardSubTitle;
    childCardElemSubTitle.classList.add('text-md', 'text-gray-500', 'mt-1');

    childCardElemTel.innerText = childCardTel;
    childCardElemTel.classList.add('text-2xl', 'mt-3', 'font-bold');

    childCardElemCategory.innerText = childCardCategory;
    childCardElemCategory.classList.add('bg-gray-500/15', 'w-fit', 'px-3', 'rounded-3xl', 'text-sm');

    childCardElemCopyBTN.innerHTML = '<i class="fa-regular fa-copy mr-2"></i>Copy';
    childCardElemCopyBTN.classList.add('w-[47%]', 'border-1', 'border-gray-300', 'rounded-sm', 'text-gray-500/80', 'cursor-pointer');

    childCardElemCallBTN.innerText = "Call";
    childCardElemCallBTN.classList.add('w-[47%]', 'bg-[#00A63E]', 'rounded-sm', 'cursor-pointer', 'text-white');

    cardsParent.appendChild(childCard);


    childCard.appendChild(childCardElemImgContainer);
    childCard.appendChild(childCardElemTitle);
    childCard.appendChild(childCardElemSubTitle);
    childCard.appendChild(childCardElemTel);
    childCard.appendChild(childCardElemCategory);
    childCard.appendChild(childCardElemBTNContainer);


    childCardElemImgContainer.appendChild(childCardElemImg);
    childCardElemImgContainer.appendChild(childCardElemLove);

    childCardElemBTNContainer.appendChild(childCardElemCopyBTN);
    childCardElemBTNContainer.appendChild(childCardElemCallBTN);


    childCardElemCallBTN.addEventListener('click', (event) => {
        event.preventDefault();
        if(coinCount < 20) {
            alert("Not enough coins to call");
            return;
        }
        coinCount = coinCount - 20;
        coins.innerText = coinCount;
        alert(`Calling ${cardData[i].title} ${cardData[i].tel}`)
    })

    childCardElemCopyBTN.addEventListener('click', () => {
        copyCount++;
        copies.innerText = copyCount;
        alert(`${cardData[i].tel} is successfully copied to clipboard`);
        navigator.clipboard.writeText(cardData[i].tel);
    })

    childCardElemLove.addEventListener('click', () => {
        heartCount++;
        hearts.innerText = heartCount;
    })
}
