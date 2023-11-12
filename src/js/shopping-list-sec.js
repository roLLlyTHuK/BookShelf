import { el } from './refs.js';
const paginationNumbers = document.getElementById('pagination-numbers');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

const myArray = [
  {
    _id: '643282b1e85766588626a0dc',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-09T09:28:38.946Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Alison Roman',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg',
    book_image_width: 402,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/aab1d8fe-9383-5fa0-bbf9-80321e07a3d8',
    contributor: 'by Alison Roman',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1984826395',
    primary_isbn13: '9781984826398',
    publisher: 'Clarkson Potter',
    rank: 3,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'SWEET ENOUGH',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781984826398?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984826398',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSWEET%252BENOUGH%252FAlison%252BRoman%252F9781984826398&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSWEET%252BENOUGH%252BAlison%252BRoman',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984826398&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSWEET%2BENOUGH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984826398%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSWEET%2BENOUGH%2BAlison%2BRoman%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a080',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'James Clear',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg',
    book_image_width: 328,
    book_image_height: 495,
    book_review_link: '',
    book_uri: 'nyt://book/0398a355-c032-534e-a0af-647b06f0840d',
    contributor: 'by James Clear',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0735211299',
    primary_isbn13: '9780735211292',
    publisher: 'Avery',
    rank: 1,
    rank_last_week: 1,
    sunday_review_link: '',
    title: 'ATOMIC HABITS',
    updated_date: '2023-04-05 22:10:16',
    weeks_on_list: 175,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780735211292?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a0ba',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-09T09:28:38.643Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Shannon Bream',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg',
    book_image_width: 329,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/dc28bfbb-6ba7-54c6-a60b-272a327604ab',
    contributor: 'by Shannon Bream',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0063226057',
    primary_isbn13: '9780063226050',
    publisher: 'Broadside',
    rank: 2,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'THE LOVE STORIES OF THE BIBLE SPEAK',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780063226050?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b2e85766588626a144',
    list_name: 'Childrens Middle Grade Hardcover',
    date: '2023-04-09T09:28:39.293Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/1250147425?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Katherine Applegate.',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250147424.jpg',
    book_image_width: 347,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/8b347350-da89-57e4-ab94-7812cf36069d',
    contributor: 'by Katherine Applegate. Illustrated by Charles Santoso',
    contributor_note: 'Illustrated by Charles Santoso',
    created_date: '2023-04-05 22:05:24',
    description:
      'After a shark attack, Odder recuperates at the aquarium with the scientists who raised her.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250147425',
    primary_isbn13: '9781250147424',
    publisher: 'Feiwel & Friends',
    rank: 5,
    rank_last_week: 3,
    sunday_review_link: '',
    title: 'ODDER',
    updated_date: '2023-04-05 22:10:14',
    weeks_on_list: 28,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1250147425?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250147424?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250147424',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FODDER%252FKatherine%252BApplegate.%252F9781250147424&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DODDER%252BKatherine%252BApplegate.',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250147424&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DODDER',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250147424%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DODDER%2BKatherine%2BApplegate.%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a085',
    list_name: 'Audio Fiction',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Bonnie Garmus',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg',
    book_image_width: 328,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/a7229ef2-7522-5cb7-86c4-024aca7420e7',
    contributor: 'by Bonnie Garmus',
    contributor_note: '',
    created_date: '2023-04-05 23:10:05',
    description:
      'A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show. Read by Miranda Raison, Pandora Sykes and the author. 11 hours, 55 minutes unabridged.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0593507533',
    primary_isbn13: '9780593507537',
    publisher: 'Random House Audio',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'LESSONS IN CHEMISTRY',
    updated_date: '2023-04-05 23:10:05',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780593507537?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593507537',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FLESSONS%252BIN%252BCHEMISTRY%252FBonnie%252BGarmus%252F9780593507537&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DLESSONS%252BIN%252BCHEMISTRY%252BBonnie%252BGarmus',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593507537&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DLESSONS%2BIN%2BCHEMISTRY',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593507537%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DLESSONS%2BIN%2BCHEMISTRY%2BBonnie%2BGarmus%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a0b2',
    list_name: 'Audio Fiction',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798622?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Taylor Jenkins Reid',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781524798628.jpg',
    book_image_width: 325,
    book_image_height: 495,
    book_review_link:
      'https://www.nytimes.com/2019/03/04/books/review/daisy-jones-six-taylor-jenkins-reid.html',
    book_uri: 'nyt://book/bd6e9bf1-e330-5495-9058-cde02152bfd4',
    contributor: 'by Taylor Jenkins Reid',
    contributor_note: '',
    created_date: '2023-04-05 23:10:05',
    description:
      'A fictional oral history charting the rise and fall of a ’70s rock ’n’ roll band. Read by Jennifer Beals, Benjamin Bratt, Judy Greer and Pablo Schreiber. 9 hours, 3 minutes unabridged.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '',
    primary_isbn13: '9781984845306',
    publisher: 'Random House Audio',
    rank: 2,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'DAISY JONES & THE SIX',
    updated_date: '2023-04-05 23:10:05',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798622?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781984845306?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984845306',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDAISY%252BJONES%252B%252526%252BTHE%252BSIX%252FTaylor%252BJenkins%252BReid%252F9781984845306&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDAISY%252BJONES%252B%252526%252BTHE%252BSIX%252BTaylor%252BJenkins%252BReid',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984845306&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDAISY%2BJONES%2B%2526%2BTHE%2BSIX',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984845306%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDAISY%2BJONES%2B%2526%2BTHE%2BSIX%2BTaylor%2BJenkins%2BReid%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
];

let jsonString = JSON.stringify(myArray);

localStorage.setItem('books-list', jsonString);
// localStorage.removeItem('myArray');

const tempBookList = JSON.parse(localStorage.getItem('books-list'));

function getPaginationLimit() {
  if (window.innerWidth <= 767) {
    return 4;
  } else {
    return 3;
  }
}

function getItemsInBatch(startIndex, batchSize) {
  return tempBookList.slice(startIndex, startIndex + batchSize);
}

const paginationLimit = getPaginationLimit();
const pageCount = Math.ceil(tempBookList.length / paginationLimit);
let currentPage;

function appendPageNumber(index) {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);
  paginationNumbers.appendChild(pageNumber);
}

function getPaginationNumbers() {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
}

window.addEventListener('load', () => {
  getPaginationNumbers();
  setCurrentPage(1);

  document.querySelectorAll('.pagination-number').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex) {
      button.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

function setCurrentPage(pageNum) {
  currentPage = pageNum;

  handleActivePageNumber();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  const listBatch = getItemsInBatch(prevRange, currRange);

  if (!listBatch) {
    el.emptyPage.classList.remove('hidden');
  } else {
    el.shoppingList.innerHTML = '';
    el.shoppingList.insertAdjacentHTML(
      'afterbegin',
      createBookTemplate(listBatch)
    );
    el.shoppingList.addEventListener('click', deleteFromCart);
  }
}

function handleActivePageNumber() {
  document.querySelectorAll('.pagination-number').forEach(button => {
    button.classList.remove('active');

    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex == currentPage) {
      button.classList.add('active');
    }
  });
}

function createBookTemplate(bookList) {
  const template = bookList.map(
    book => `
            <li class="shopping-book-card" data-book-id="${book._id}">
                <div class="image-thumb">
                <picture>
                  <source srcset="${book.book_image}" type="image/jpg">
                  <img class="shopping-book-cover" srcset="/images/shopping-list-sec/plug_x2.png 2x, /images/shopping-list-sec/plug_x1.png 1x" src="/images/shopping-list-sec/plug_x1.png" alt="plug">
                </picture>
                </div>
                <div class="card-info">
                    <h3 class="shopping-book-title">${book.title}</h3>
                    <p class="shopping-book-category">${book.list_name}</p>
                    <p class="shopping-book-description">${book.description}</p>
                    <p class="shopping-book-author">${book.author}</p>
                </div>
                <button type="button" class="delete-btn js-delete-book">
                    <svg class="delete-svg" width="16" height="16">
                        <use href="/images/shopping-list-sec/sprite.svg#trash-03"></use>
                    </svg>
                </button>
                <div class="trade-fairs">
                  <a href="${book.buy_links[0].url}" target="_blank">
                    <img class="amazon-img" src="/images/shopping-list-sec/amazon.svg" width="32" height="11"/>
                  </a>
                  <a href="${book.buy_links[1].url}" target="_blank">
                    <img class="apple-books-img" src="/images/shopping-list-sec/appleBooks.svg" width="16" height="16"/>
                  </a>
                </div>
            </li>
`
  );
  return template.join('');
}

function deleteFromCart(e) {
  if (!e.target.parentNode.classList.contains('js-delete-book')) {
    return;
  }

  const card = e.target.closest('.shopping-book-card');
  const bookId = card.dataset['bookId'];
  const bookIndex = tempBookList.find(item => item._id === bookId);
  tempBookList.splice(tempBookList.indexOf(bookIndex), 1);
  localStorage.setItem('books-list', JSON.stringify(tempBookList));

  setCurrentPage(currentPage);
}
