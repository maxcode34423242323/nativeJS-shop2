const postData = async (url, data) => {
    let res = await fetch(url,{
        method: 'POST',
        body: data
    });
    return await res.text();
};
const getData = async () => {
    try {
        const res = await fetch(`https://react-native-70a4a.firebaseio.com/styles.json`);
        const json = await res.json();
        console.log(json);
        return json;

    } catch (e) {
        console.log(e);
    }
};

export {
    postData, getData
};