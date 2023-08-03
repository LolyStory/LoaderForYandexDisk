export const putLoadingUrl = async (urlPut: string[], file: File[]) => {
    const notification = [];
    //console.log(file);
    
    for (let i = 0; i < file.length; i++) {
        notification.push(
            await fetch(urlPut[i], {
                method: "PUT",
                body: file[i],
            },)
        )
    }

    Promise.all(notification).then((value) => {
        console.log(value);
        return value;
    });


}