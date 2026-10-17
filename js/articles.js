let books = [
  /*********************************
  * Weight 6
  **********************************/
  {
    country: "USA",
    weight: 6,
    chapters: [
      {
        name: "The New York Times",
        url: "https://www.nytimes.com/international/",
        weight: 5,
      },
      {
        name: "Obituaries",
        url: "https://www.nytimes.com/international/section/obituaries",
        weight: 5,
      },
    ],
  },
  {
    country: "UK",
    weight: 6,
    chapters: [
      {
        name: "The Guardian",
        url: "https://www.theguardian.com/international/",
        weight: 5,
      },
      {
        name: "Comment is Free",
        url: "https://www.theguardian.com/uk/commentisfree",
        weight: 4,
      },
      {
        name: "Tech",
        url: "https://www.theguardian.com/uk/technology",
        weight: 3,
      },
    ],
  },

  /*********************************
  * Weight 5
  **********************************/
  {
    country: "Qatar",
    weight: 5,
    chapters: [
      {
        name: "Al Jazeera",
        url: "https://www.aljazeera.com/",
        weight: 4,
      },
      {
        name: "Opinion",
        url: "https://www.aljazeera.com/opinion/",
        weight: 5,
      },
    ],
  },
  {
    country: "USA",
    weight: 5,
    chapters: [
      {
        name: "CNN",
        url: "https://edition.cnn.com/",
        weight: 5,
      },
    ],
  },
  {
    country: "UK",
    weight: 5,
    chapters: [
      {
        name: "BBC",
        url: "https://www.bbc.com/news",
        weight: 5,
      },
    ],
  },

  /*********************************
  * Weight 4
  **********************************/
  {
    country: "USA",
    weight: 4,
    chapters: [
      {
        name: "The Atlantic",
        url: "https://www.theatlantic.com/world/",
        weight: 5,
      },
    ],
  },
  {
    country: "Australia",
    weight: 4,
    chapters: [
      {
        name: "Aeon Essays",
        url: "https://aeon.co/essays",
        weight: 5,
      },
    ],
  },
  {
    country: "Australia",
    weight: 4,
    chapters: [
      {
        name: "The Conversation",
        url: "https://theconversation.com/global",
        weight: 5,
      },
    ],
  },
  {
    country: "USA",
    weight: 4,
    chapters: [
      {
        name: "The New Yorker",
        url: "https://www.newyorker.com/",
        weight: 5,
      },
    ],
  },
  {
    country: "USA",
    weight: 4,
    chapters: [
      {
        name: "Los Angeles Times",
        url: "https://www.latimes.com/",
        weight: 1,
      },
      {
        name: "Obituaries",
        url: "https://www.latimes.com/obituaries/",
        weight: 5,
      },
    ],
  },
  {
    country: "Spain",
    weight: 4,
    chapters: [
      {
        name: "El País",
        url: "https://english.elpais.com/",
        weight: 5,
      },
    ],
  },

  /*********************************
  * Weight 3
  **********************************/
  {
    country: "USA",
    weight: 3,
    chapters: [
      {
        name: "The Washington Post",
        url: "https://www.washingtonpost.com/world/",
        weight: 5,
      },
      {
        name: "Tech",
        url: "https://www.washingtonpost.com/business/technology/",
        weight: 4,
      },
      {
        name: "Opinions",
        url: "https://www.washingtonpost.com/opinions/",
        weight: 3,
      },
    ],
  },
  {
    country: "Isreal",
    weight: 3,
    chapters: [
      {
        name: "Haaretz",
        url: "https://www.haaretz.com/",
        weight: 5,
      },
    ],
  },
  {
    country: "India",
    weight: 3,
    chapters: [
      {
        name: "The Hindu",
        url: "https://www.thehindu.com/",
        weight: 5,
      },
    ],
  },
  {
    country: "India",
    weight: 3,
    chapters: [
      {
        name: "Indian Express",
        url: "https://indianexpress.com/",
        weight: 5,
      },
    ],
  },


  /*********************************
  * Weight 2
  **********************************/
  {
    country: "Japan",
    weight: 2,
    chapters: [
      {
        name: "The Japan Times",
        url: "https://www.japantimes.co.jp/",
        weight: 5,
      },
    ],
  },
  {
    country: "South Korea",
    weight: 2,
    chapters: [
      {
        name: "The Korea Herald",
        url: "https://www.koreaherald.com/",
        weight: 5,
      },
    ],
  }, {
    country: "USA",
    weight: 2,
    chapters: [
      {
        name: "The Hollywood Reporter",
        url: "https://www.hollywoodreporter.com/",
        weight: 5,
      },
    ],
  },

  {
    country: "USA",
    weight: 2,
    chapters: [
      {
        name: "Variety",
        url: "https://variety.com/",
        weight: 5,
      },
    ],
  },

  /*********************************
  * Weight 1
  **********************************/
  {
    country: "Pakistan",
    weight: 1,
    chapters: [
      {
        name: "The Express Tribune",
        url: "https://tribune.com.pk/",
        weight: 5,
      },
    ],
  },
  {
    country: "Pakistan",
    weight: 1,
    chapters: [
      {
        name: "Dawn",
        url: "https://www.dawn.com/",
        weight: 5,
      },
    ],
  },
  {
    country: "China",
    weight: 1,
    chapters: [
      {
        name: "Global Times Opinion",
        url: "https://www.globaltimes.cn/opinion/index.html",
        weight: 5,
      },
    ],
  }, {
    country: "Iran",
    weight: 1,
    chapters: [
      {
        name: "Tehran Times",
        url: "https://www.tehrantimes.com/",
        weight: 5,
      },
    ],
  }, {
    country: "Isreal",
    weight: 1,
    chapters: [
      {
        name: "The Times of Israel",
        url: "https://www.timesofisrael.com/",
        weight: 5,
      },
    ],
  }, {
    country: "Singapore",
    weight: 1,
    chapters: [
      {
        name: "The Straits Times Opinion",
        url: "https://www.straitstimes.com/opinion",
        weight: 5,
      },
    ],
  }
];

let processedList = [];

function getTotalWeight(items) {
  let ret = 0;
  items.forEach(function (item, index) {
    ret += item.weight;
  });
  return ret;
}

function processList() {
  let booksWeight = getTotalWeight(books);
  let booksWeightStart = 0;
  books.forEach(function (book, index) {
    let chaptersWeight = getTotalWeight(book.chapters);

    let chaptersWeightSoFar = 0;
    book.chapters.forEach(function (chapter, chapterNumber) {
      chaptersWeightSoFar += chapter.weight;

      let name = book.chapters[0].name;
      if (chapterNumber > 0) name += " > " + book.chapters[chapterNumber].name;
      let endRange =
        (booksWeightStart +
          ((book.weight * 5) * chaptersWeightSoFar) / chaptersWeight) /
        booksWeight;
      processedList.push({
        name: name,
        endRange: endRange,
        url: chapter.url,
        target: book.chapters[0].name,
        country: book.country,
      });
    });
    booksWeightStart += (book.weight * 5);
  });
}
function shuffleArray(array) {
  // Create a copy of the array to avoid modifying the original array
  let shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

function doIt() {
  processList();

  const item = shuffleArray(processedList)[0];

  const aTag = document.createElement("a");
  aTag.href = item.url;
  aTag.target = item.target;
  aTag.textContent = item.name;

  document.querySelector("h1").replaceChildren(aTag);
  document.getElementById("country").textContent = item.country;
}
doIt();
document.getElementById('goButton').addEventListener('click', function () {
  const link = document.querySelector('h1 a');

  if (link) {
    link.click();
    doIt();
  }
});
