const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const ul = document.getElementById("ul");
const ul2 = document.getElementById("ul2");

// Random Quotes
const getRandomQuoteTrump = async function () {

    const apiUrl = `https://api.whatdoestrumpthink.com/api/v1/quotes/random`;
    try {
        const res = await fetch(apiUrl, { method: "GET" })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
};

const fetchRandomQuoteTrump = async () => {
    const result = await getRandomQuoteTrump();
    return result;
};

button.addEventListener("click", () => {
    fetchRandomQuoteTrump().then(data => {
        const randomQuote = "Quote; " + data.message;
        let li = document.createElement("li");
        let textnode = document.createTextNode(randomQuote);
        li.appendChild(textnode);
        ul.appendChild(li);
    })
});


// Personalized Quotes
const getPersonalizedQuoteTrump = async function () {
    const yourname = document.getElementById("myText").value;
    const apiUrl = `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${yourname}`;
    try {
        const res = await fetch(apiUrl, { method: "GET" })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
};
const fetchPersonalizedQuoteTrump = async () => {
    const result = await getPersonalizedQuoteTrump();
    return result;
};
button2.addEventListener("click", () => {
    fetchPersonalizedQuoteTrump().then(data => {
        const personalizedQuote = data.message;
        let li = document.createElement("li");
        let textnode = document.createTextNode(personalizedQuote);
        li.appendChild(textnode);
        ul2.appendChild(li);
    })
});

function refreshPage() {
    window.location.reload();
}
