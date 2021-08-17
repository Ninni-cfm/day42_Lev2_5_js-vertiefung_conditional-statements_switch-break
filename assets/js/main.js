// for later use...
/*
"Baden-Württemberg", 10.880, "Stuttgart"
"Bayern", 12.844, "München"
"Berlin", 3.520, "Berlin"
"Brandenburg", 2.485, "Potsdam"
"Bremen", 0.671, "Bremen"
"Hamburg", 1.787, "Hamburg"
"Hessen", 6.176, "Wiesbaden"
"Mecklenburg-Vorpommern", 1.612, "Schwerin"
"Niedersachsen", 7.927, "Hannover"
"Nordrhein-Westfalen", 17.865, "Düsseldorf"
"Rheinland-Pfalz", 4.053, "Mainz"
"Saarland", 0.996, "Saarbrücken"
"Sachsen", 4.085, "Dresden"
"Sachsen-Anhalt", 2.245, "Magdeburg"
"Schleswig-Holstein", 2.859, "Kiel"
"Thüringen", 2.171, "Erfurt"
*/

function check() {

    let state = document.getElementById("bundeslandInfo").value;

    let res;
    switch (state.toLowerCase()) {
        case "baden-württemberg":
        case "baden-wuerttemberg":
            res = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
            break;
        case "bayern":
            res = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"
            break;
        case "berlin":
            res = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
            break;
        case "brandenburg":
            res = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"
            break;
        case "bremen":
            res = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
            break;
        case "hamburg":
            res = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
            break;
        case "hessen":
            res = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
            break;
        case "mecklenburg-vorpommern":
            res = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
            break;
        case "niedersachsen":
            res = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
            break;
        case "nrw":
        case "nordrhein-westfalen":
            res = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"
            break;
        case "rheinland-pfalz":
            res = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"
            break;
        case "saarland":
            res = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
            break;
        case "sachsen":
            res = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
            break;
        case "sachsen-anhalt":
            res = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"
            break;
        case "schleswig-holstein":
            res = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
            break;
        case "thüringen":
        case "thueringen":
            res = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
            break;

        default:
            res = "Ein solches Bundesland gibt es in Deutschland nicht."
            break;
    }
    document.getElementById("bundeslandInfoErgebnis").innerHTML = res;
}

