const uk_phonemic = "ðə ˈnɔːθ ˈwɪnd ən ðə ˈsʌn wə dɪˈspjuːtɪŋ ˈwɪtʃ wəz ðə ˈstrɒŋɡə, wen ə ˈtrævl̩ə ˌkeɪm əˌlɒŋ ˈræpt ɪn ə ˈwɔːm ˈkləʊk. ðeɪ əˈɡriːd ðət ðə ˈwʌn hu ˈfɜːst səkˈsiːdɪd ɪn ˈmeɪkɪŋ ðə ˈtrævlə ˌteɪk hɪz ˈkləʊk ɒf ʃʊd bi kənˌsɪdəd ˈstrɒŋɡə ðən ði ˈʌðə. ˈðen ðə ˌnɔːθ wɪnd ˈbluː əz ˈhɑːd əz i ˈkʊd, bət ðə ˈmɔː hi ˈbluː ðə ˌmɔː ˈkləʊsli dɪd ðə ˈtrævlə ˈfəʊld hɪz ˌkləʊk əˈraʊnd hɪm, ænd ət ˈlɑːst ðə ˈnɔ:θ wɪnd ˌɡeɪv ˈʌp ði əˈtempt. ˈðen ðə ˈsʌn ˌʃɒn aʊt ˈwɔːmli, ænd əˈmiːdiətli ðə ˈtrævlə ˈtʊk ɒf ɪz ˈkləʊk. n̩ ˌsəʊ ðə ˈnɔːθ ˈwɪn wəz əˈblaɪdʒd tʊ kənˈfes ðət ðə ˈsʌn wəz ðə ˈstrɒŋɡr̩ əv ðə ˈtuː.";
const us_phonemic = "ðə ˈnoɹθ ˈwɪnd æn ðə ˈsʌn wɚ dɪsˈpjutɪŋ wɪtʃ wəz ðə ˈstɹɔŋgɚ, wɛn ə ˈtɹævlɚ ˌkem əˈlɔŋ ˈɹæpt ɪn ə ˈwoɹm ˈklok. ðe əˈgɹid ðət ðə ˈwʌn hu ˈfɚst səkˈsidəd ɪn ˈmekɪŋ ðə ˈtɹævlɚ ˈtek hɪz ˈklok ˌɔf ʃʊd bi kənˈsɪdɚd ˈstɹɔŋgɚ ðən ði ˈʌðɚ. ˈðɛn ðə ˈnoɹθ ˈwɪnd ˈblu əz ˈhɑɹd əz hi ˈkʊd, bət ðə ˈmoɹ hi ˈblu, ðə moɹ ˈklosli dɪd ðə ˈtɹævlɚ ˈfold hɪz ˈklok əˈɹaʊnd hɪm; ænd ət ˈlæst ðə ˈnoɹθ ˈwɪnd ˌgev ˈʌp ði əˈtɛmpt. ˈðɛn ðə ˈsʌn ˈʃaɪnd ˌaʊt ˈwoɹmli, ɛn ɪˈmidiətli ðə ˈtɹævlɚ ˌtʊk ˈɔf hɪz ˈklok. æn ˌso ðə ˈnoɹθ ˈwɪnd wəz əˈblaɪdʒ tə kənˈfɛs ðət ðə ˈsʌn wəz ðə ˈstɹɔŋgɚ əv ðə ˈtu.";

const uk_allophonic = "ðə ˈnɔːθ ˈw̥ɪnd ən̪n̪ə ˈsʌn wə dɪˈspj̊u̟ːtɪŋ ˈwɪʔtʃ wəz ðə ˈstɹ̥ɒŋɡə, wen ə ˈtɹ̥ævl̩ə ˌkʰeɪm əˌlɒŋ ˈɹæptʰ ɪn ə ˈwɔːm ˈkl̥əʊkˣ. ðeɪ əˈɡɹ̥iːd̥ ð̥əʔ ðə ˈwʌn ɦu ˈfɜːs səkˈsiːdɪd ɪmˈmeɪxɪŋ ðə ˈtɹ̥ævlə ˌtʰeɪk̟x̟ɪs ˈkl̥əʊk ɒf ʃʊbbi kʰənˌsɪdəd̥ ˈstɹɒŋɡə ð̥ən̪n̪i ˈʌðə. ˈðen̪n̪ə ˌnɔːθ w̥ɪnd ˈbluː əz̥ ˈhɑːd̥ əs i ˈkʊd, bət̬ ð̥ə ˈmɔː hi ˈblu̟ː ðə ˌmɔ ˈkl̥əʊsl̥i d̥ɨd ð̥ə ˈtɹ̥æv̥lə ˈfəʊld̥ hɪz̥ ˌkl̥əʊkʰ əˈɹaʊnd hɪm, ænd ət ˈl̥ɑːst ð̥ə ˈnɔ:θ w̥ɪnd ˌɡ̊eɪv̥ ˈʌp ði̥ əˈtʰemʔt. ˈðen̪n̪ə ˈsʌn ˌʃɒn aʊt ˈwɔːmli, ænd əˈmiːdiətl̥i ð̥ə ˈtɹ̥ævlə ˈtʰʊk ɒf ɪz̥ ˈkl̥əʊkˣ. n̩ ˌsəʊ ðə ˈnɔːθ ˈw̥ɪn wəz̥ əˈblaɪdʒ̊ tʰɵ kʰənˈfes ð̥əʔ ð̥ə ˈsʌn wəz̥z̥ə ˈstɹ̥ɒŋɡɹ̩ əv̥ ð̥ə ˈtʰu̟ː.";
const us_allophonic = "ðə ˈnɔɚθ ˈwɪnd æn ðə ˈsʌn wɚ dɪsˈpjuɾɪŋ wɪtʃ wəz ðə ˈstɹɔŋgɚ, wɛn ə ˈtʰɹ̥ævlɚ ˌkʰem əˈlɔŋ ˈɹæpt ɪn ə ˈwɔɚm ˈkʰl̥ok. ðə əˈgɹɪd ðət ðə ˈwʌn hu ˈfɚst səkˈsɪdəd ɪn ˈmekɪŋ ðə ˈtʰɹ̥ævlɚ ˈtʰek hɪz ˈkʰl̥ok ˌɔf ʃʊd bi kʰənˈsɪdɚd ˈstɹɔŋgɚ ðən ði ˈʌðɚ. ˈðɛn ðə ˈnɔɚθ ˈwɪnd ˈblu əz ˈhɑɚd əz hi ˈkʰʊd, bət ðə ˈmɔɚ hi ˈblu, ðe mɔɚ ˈkʰl̥osli dɪd ðə ˈtʰɹ̥ævlɚ ˈfold hɪz ˈkʰl̥ok əˈɹaʊnd hɪm; ænd ət ˈlæst ðə ˈnɔɚθ ˈwɪnd ˌgev ˈʌp ði əˈtʰɛmpt. ˈðɛn ðə ˈsʌn ˈʃaɪnd ˌaʊt ˈwɔɚmli, æn ɪˈmidiətli ðə ˈtʰɹ̥ævlɚ ˌtʰʊk ˈɔf hɪz ˈkʰlok. æn ˌso ðə ˈnɔɚθ ˈwɪnd wəz əˈblaɪdʒ tə kʰənˈfɛs ðət ðə ˈsʌn wəz ðə ˈstɹɔŋgɚ ʌv ðə ˈtʰu.";

const uk_orthographic = "The North Wind and the Sun were disputing which was the stronger, when a traveller came along wrapped in a warm cloak. They agreed that the one who first succeeded in making the traveller take his cloak off should be considered stronger than the other. Then the North Wind blew as hard as he could, but the more he blew the more closely did the traveller fold his cloak around him, and at last the North Wind gave up the attempt. Then the Sun shone out warmly, and immediately the traveller took off his cloak. And so the North Wind was obliged to confess that the Sun was the stronger of the two.";
const us_orthographic = "The North Wind and the Sun were disputing which was the stronger, when a traveler came along wrapped in a warm cloak. They agreed that the one who first succeeded in making the traveler take his cloak off should be considered stronger than the other. Then the North Wind blew as hard as he could, but the more he blew the more closely did the traveler fold his cloak around him; and at last the North Wind gave up the attempt. Then the Sun shined out warmly, and immediately the traveler took off his cloak. And so the North Wind was obliged to confess that the Sun was the stronger of the two.";

const parts = [
    {
        "uk": {
            o: 65,
            p: 63,
            a: 69,
            u: "s110.ogg"
        },
        "us": {
            o: 65,
            p: 61,
            a: 61,
            u: "us110.wav"
        }
    },
    {
        "uk": {
            o: 118,
            p: 115,
            a: 126,
            u: "s120.ogg"
        },
        "us": {
            o: 117,
            p: 110,
            a: 115,
            u: "us120.wav"
        }
    },
    {
        "uk": {
            o: 206,
            p: 202,
            a: 218,
            u: "s210.ogg"
        },
        "us": {
            o: 204,
            p: 191,
            a: 201,
            u: "us210.wav"
        }
    },
    {
        "uk": {
            o: 252,
            p: 241,
            a: 260,
            u: "s220.ogg"
        },
        "us": {
            o: 250,
            p: 230,
            a: 241,
            u: "us220.wav"
        }
    },
    {
        "uk": {
            o: 298,
            p: 286,
            a: 309,
            u: "s310.ogg"
        },
        "us": {
            o: 296,
            p: 276,
            a: 288,
            u: "us310.wav"
        }
    },
    {
        "uk": {
            o: 381,
            p: 370,
            a: 405,
            u: "s320.ogg"
        },
        "us": {
            o: 378,
            p: 356,
            a: 374,
            u: "us320.wav"
        }
    },
    {
        "uk": {
            o: 429,
            p: 420,
            a: 462,
            u: "s330.ogg"
        },
        "us": {
            o: 426,
            p: 405,
            a: 424,
            u: "us330.wav"
        }
    },
    {
        "uk": {
            o: 460,
            p: 451,
            a: 494,
            u: "s410.ogg"
        },
        "us": {
            o: 458,
            p: 439,
            a: 458,
            u: "us410.wav"
        }
    },
    {
        "uk": {
            o: 510,
            p: 497,
            a: 547,
            u: "s420.ogg"
        },
        "us": {
            o: 507,
            p: 484,
            a: 507,
            u: "us420.wav"
        }
    },
    {
        "uk": {
            o: 597,
            p: 585,
            a: 647,
            u: "s500.ogg"
        },
        "us": {
            o: 594,
            p: 569,
            a: 594,
            u: "us500.wav"
        }
    }
];


var portions = {
    "uk": [],
    "us": []
};

let uk_p = 0;
let uk_a = 0;
let uk_o = 0;

let us_p = 0;
let us_a = 0;
let us_o = 0;

for(let part of parts) {

    portions.uk.push({
        len: part.uk.p-uk_p,
        p: uk_phonemic.substring(uk_p, part.uk.p),
        a: uk_allophonic.substring(uk_a, part.uk.a),
        o: uk_orthographic.substring(uk_o, part.uk.o),
        u: new Audio(`audio/${part.uk.u}`)
    });
    uk_p = part.uk.p+1;
    uk_a = part.uk.a+1;
    uk_o = part.uk.o+1;

    portions.us.push({
        len: part.us.p-us_p,
        p: us_phonemic.substring(us_p, part.us.p),
        a: us_allophonic.substring(us_a, part.us.a),
        o: us_orthographic.substring(us_o, part.us.o),
        u: new Audio(`audio/${part.us.u}`)
    });
    us_p = part.us.p+1;
    us_a = part.us.a+1;
    us_o = part.us.o+1;
}

jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};

function getLang() {
    return localStorage.getItem("lang") || "uk";
}

function setLang(lang) {
    localStorage.setItem("lang", lang);
}