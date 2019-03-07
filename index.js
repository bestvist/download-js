const x = new XMLHttpRequest();
x.open("GET", item.attachUrl, true);
x.responseType = "blob";
x.onload = e => {
    download(
        x.response,
        item.documentName.split("?")[0],
        x.response.type
    );
};
x.send();
